import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from '../config/db/prisma.service';
import { Status } from '@prisma/client';

@Injectable()
export class CartService {
  private readonly cart: PrismaService['shopping_cart'];
  private readonly cartItem: PrismaService['cart_item'];

  constructor(
    prismaService: PrismaService,
  ) {
    this.cart = prismaService.shopping_cart;
    this.cartItem = prismaService.cart_item;
  }

  // async addToCart(createCartDto: CreateCartDto, userId: number) {
  //   // si no existe el carrito, crear uno con los items
  //   const cart = await this.cart.findUnique({ where: { user_id: userId, status: Status.Activo } });

  //   if (!cart) {
  //     return await this.cart.create({
  //       data: {
  //         user_id: userId,
  //         total: 0,
  //         cart_item: {
  //           create: {
  //             product_id: createCartDto.productId,
  //             quantity: createCartDto.quantity,
  //             price: 0,
  //           }
  //         }
  //       },
  //     });
  //   }

  //   if (createCartDto.quantity <= 0) {
  //     return await this.cartItem.delete({
  //       where: {
  //         id_cart_item
  //         AND: [
  //           {
  //             shopping_cart_id: cart.id_shopping_cart,
  //             product_id: createCartDto.productId,
  //           }
  //         ]
  //       }
  //     });
  //   }

  //   return await this.cartItem.create({
  //     data: {
  //       shopping_cart_id: cart.id_shopping_cart,
  //       product_id: createCartDto.productId,
  //       quantity: createCartDto.quantity,
  //       price: 0,
  //     },
  //   });
  // }

  async getUserCart(userId: number) {
    const result = await this.cart.findUnique({ where: { user_id: userId }, include: { cart_item: { include: { product: { include: { user_ce: true, predefinedProduct: true } } } } } });
    if (!result) throw new NotFoundException('No se encontro el pedido');
    return result;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} cart`;
  // }

  async update(updateCartDto: UpdateCartDto, userId: number) {
    // si no existe el carrito, crear uno con los items
    let cart = await this.cart.findUnique({ where: { user_id: userId, status: Status.Activo } });

    if (!cart) {
      cart = await this.cart.create({
        include: { cart_item: { include: { product: { select: { price: true, user_ce: true } } } } },
        data: {
          user_id: userId,
          total: 0
        },
      });
    }

    const existCartItem = await this.cartItem.findFirst({ where: { shopping_cart_id: cart.id_shopping_cart, product_id: updateCartDto.productId } });

    if (!existCartItem && updateCartDto.quantity <= 0) {
      throw new BadRequestException('Producto no existe');
    }

    if (!existCartItem) {
      await this.cartItem.create({
        data: {
          shopping_cart_id: cart.id_shopping_cart,
          product_id: updateCartDto.productId,
          quantity: updateCartDto.quantity,
          price: 0,
        },
      });

      const cartItems = await this.cartItem.findMany({ where: { shopping_cart_id: cart.id_shopping_cart }, include: { product: { select: { price: true } } } });
      const total = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

      const res = await this.cart.update({ where: { id_shopping_cart: cart.id_shopping_cart }, include: { cart_item: { include: { product: { include: { user_ce: true } } } } }, data: { total } });
      return res;
    }

    if (updateCartDto.quantity <= 0) {
      await this.cartItem.delete({
        where: {
          id_cart_item: existCartItem.id_cart_item,
        }
      });

      const cartItems = await this.cartItem.findMany({ where: { shopping_cart_id: cart.id_shopping_cart }, include: { product: { select: { price: true } } } });

      const total = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

      return await this.cart.update({
        where: { id_shopping_cart: cart.id_shopping_cart },
        include: { cart_item: { include: { product: { include: { user_ce: true } } } } },
        data: {
          total: total
        }
      });
    }

    await this.cartItem.update({
      where: { id_cart_item: existCartItem.id_cart_item },
      data: {
        shopping_cart_id: cart.id_shopping_cart,
        product_id: updateCartDto.productId,
        quantity: updateCartDto.quantity,
        price: 0,
      },
    });

    const cartItems = await this.cartItem.findMany({ where: { shopping_cart_id: cart.id_shopping_cart }, include: { product: { select: { price: true } } } });
    const total = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

    return await this.cart.update({ where: { id_shopping_cart: cart.id_shopping_cart }, include: { cart_item: { include: { product: { include: { user_ce: true } } } } }, data: { total } });
  }

  async remove(id: number) {
    await this.cartItem.deleteMany({ where: { shopping_cart_id: id } });
    return this.cart.delete({ where: { id_shopping_cart: id, status: Status.Activo } });
  }
}
