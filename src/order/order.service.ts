import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { UserToken } from 'src/auth/guards';
import { IPaypalCaptureResponse, IPaypalCreateOrderResponse, IPaypalOAtuhTokenResponse } from './interfaces/paypal-response.interface';
import { PrismaService } from 'src/config/db/prisma.service';
import { Status } from '@prisma/client';
import { CartService } from 'src/cart/cart.service';

@Injectable()
export class OrderService {
  private readonly cart: PrismaService['shopping_cart'];
  private readonly order_ce: PrismaService['order_ce'];
  private readonly order_detail: PrismaService['order_detail'];
  private readonly product: PrismaService['product'];

  constructor(
    prismaService: PrismaService,
    private readonly cartService: CartService,
  ) {
    this.cart = prismaService.shopping_cart;
    this.order_ce = prismaService.order_ce;
    this.order_detail = prismaService.order_detail;
    this.product = prismaService.product;
  }

  private async getOAuthToken(userName: string) {
    const password = process.env.PAYPAL_SECRET_KEY;
    const token = btoa(`${userName}:${password}`);

    try {
      // generate access token
      const { data } = await axios.post<IPaypalOAtuhTokenResponse>('https://api-m.sandbox.paypal.com/v1/oauth2/token',
        { grant_type: 'client_credentials' },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${token}`
          }
        }
      );
      return data.access_token;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error al crear el pago');
    }
  }

  async createPaymentOrder(user: UserToken, paypalClientId: string) {
    const userCart = await this.cartService.getUserCart(Number(user.id));
    if (!userCart.cart_item.length) throw new NotFoundException('No se encontro el pedido');

    // create order in db
    const order = await this.order_ce.create({
      data: {
        buyer_id: user.id,
        creation_date: new Date(),
        order_date: new Date(),
        total: userCart.total,
      }
    });


    try {
      const accessToken = await this.getOAuthToken(paypalClientId);

      const { data } = await axios.post<IPaypalCreateOrderResponse>('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
        intent: 'CAPTURE',
        purchase_units: [
          {
            'amount': {
              'currency_code': 'USD',
              'value': userCart.total.toString()
            }
          }
        ]
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      const transactionId = data.id;


      await this.order_ce.update({
        where: { id_order: order.id_order },
        data: {
          paypal_payment_id: transactionId,
        }
      });

      return { transactionId, orderId: order.id_order };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error al crear el pago');
    }
  }

  async approvePaymentOrder(user: UserToken, paypalClientId: string, transactionId: string) {
    const userCart = await this.cartService.getUserCart(Number(user.id));
    if (!userCart.cart_item.length) throw new NotFoundException('No se encontro el pedido');

    const order = await this.getOderByTransactionId(transactionId);

    const accessToken = await this.getOAuthToken(paypalClientId);
    // throw new InternalServerErrorException('Error al crear el pago');

    // const approveUrl = `https://www.sandbox.paypal.com/checkoutnow?token=${transactionId}`;
    const captureUrl = `https://api.sandbox.paypal.com/v2/checkout/orders/${transactionId}/capture`;

    // throw new InternalServerErrorException('Error al crear el pago');
    // const accessToken = await this.getOAuthToken(paypalClientId);

    try {

      // capture order => completed
      await axios.post<IPaypalCaptureResponse>(captureUrl, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        }
      });


      // remove cart
      await this.cartService.remove(Number(userCart.id_shopping_cart));

      const orderDetail = await this.order_detail.createMany({
        data: userCart.cart_item.map(cartItem => ({
          order_id: order.id_order,
          seller_id: cartItem.product.seller_id,
          product_id: cartItem.product.id,
          quantity: cartItem.quantity,
          unit_price: cartItem.product.price,
          subtotal: cartItem.product.price * cartItem.quantity,
          creation_date: new Date(),
          status: Status.Activo,
        }))
      });

      const amount = order.total;
      // const recipientEmail = order.order_detail[0].user_ce.paypalEmail;
      const recipientEmail = 'sb-jdbtg19938552@personal.example.com';

      // send payout order
      const payoutUrl = 'https://api-m.sandbox.paypal.com/v1/payments/payouts';

      await axios.post(payoutUrl,
        {
          sender_batch_header: {
            email_subject: 'Has recibido un pago',
            email_message: 'Te hemos enviado un pago desde nuestro e-commerce.',
            sender_batch_id: `batch_${Date.now()}`,
          },
          items: [
            {
              recipient_type: 'EMAIL',
              amount: {
                value: amount.toFixed(2),
                currency: 'USD',
              },
              receiver: recipientEmail,
              note: 'Gracias por tu trabajo',
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return orderDetail;
    } catch (error) {
      console.log(error);
      console.log(error.response.data);

      throw new InternalServerErrorException('Error al crear el pago');
    }
  }

  async removeOrder(transactionId: string) {
    const order = await this.getOderByTransactionId(transactionId);
    return this.order_ce.delete({
      where: {
        paypal_payment_id: order.paypal_payment_id
      }
    });
  }

  private async getOderByTransactionId(transactionId: string) {
    const order = await this.order_ce.findUnique({
      where: {
        paypal_payment_id: transactionId
      },
      include: {
        order_detail: {
          include: {
            user_ce: true
          }
        }
      }
    });

    if (!order) throw new NotFoundException('No se encontro el pedido');

    return order;
  }

  findAllUserOrders(userId: number) {
    return this.order_ce.findMany({
      where: {
        user_ce: { id: userId, status: Status.Activo },
        status: Status.Activo
      },
      include: {
        user_ce: { select: { name: true, lastName: true } },
      },
      orderBy: { creation_date: 'desc' },
    });
  }

  findAllUserSales(userId: number) {
    return this.order_ce.findMany({
      where: {
        order_detail: {
          every: {
            seller_id: userId
          }
        },
        status: Status.Activo
      },
      include: {
        user_ce: { select: { name: true, lastName: true } },
        order_detail: {
          include: {
            product: {
              include: { predefinedProduct: { select: { category: true } }, user_ce: { select: { name: true, lastName: true } } }
            }
          }
        }
      },
      orderBy: { creation_date: 'desc' },
    });
  }

  async getOderDetailByOrderId(id: number) {
    const order = await this.getOrderById(id);
    return this.order_detail.findMany({
      where: { order_ce: { id_order: order.id_order } },
      include: {
        product: {
          where: {
            status: Status.Activo,
            predefinedProduct: {
              status: Status.Activo,
              category: { status: Status.Activo }
            },
          },
          include: {
            predefinedProduct: {
              include: { category: true }
            },
            user_ce: { select: { name: true, lastName: true } },
          },
        },
      },
    });
  }

  async paymentByBankTransfer(user: UserToken) {
    const userCart = await this.cartService.getUserCart(Number(user.id));
    if (!userCart.cart_item.length) throw new NotFoundException('No se encontro el pedido');
    try {
      // create order in db
      const order = await this.order_ce.create({
        data: {
          buyer_id: user.id,
          creation_date: new Date(),
          order_date: new Date(),
          total: userCart.total,
        }
      });

      await this.order_detail.createMany({
        data: userCart.cart_item.map(cartItem => ({
          order_id: order.id_order,
          seller_id: cartItem.product.seller_id,
          product_id: cartItem.product.id,
          quantity: cartItem.quantity,
          unit_price: cartItem.product.price,
          subtotal: cartItem.product.price * cartItem.quantity,
          creation_date: new Date(),
          status: Status.Activo,
        }))
      });

      const promises = userCart.cart_item.map(cartItem => {
        return this.product.update({
          where: { id: cartItem.product.id },
          data: { stock: cartItem.product.stock - cartItem.quantity }
        });
      });

      await Promise.all(promises);

      return { orderId: order.id_order };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error al crear el pago');
    }
  }

  private async getOrderById(id: number) {
    const order = await this.order_ce.findUnique({
      where: {
        id_order: id
      }
    });

    if (!order) throw new NotFoundException('No se encontro el pedido');

    return order;
  }
}
