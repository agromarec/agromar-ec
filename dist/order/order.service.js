"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const prisma_service_1 = require("../config/db/prisma.service");
const client_1 = require("@prisma/client");
const cart_service_1 = require("../cart/cart.service");
let OrderService = class OrderService {
    constructor(prismaService, cartService) {
        this.cartService = cartService;
        this.cart = prismaService.shopping_cart;
        this.order_ce = prismaService.order_ce;
        this.order_detail = prismaService.order_detail;
    }
    async getOAuthToken(userName) {
        const password = process.env.PAYPAL_SECRET_KEY;
        const token = btoa(`${userName}:${password}`);
        try {
            const { data } = await axios_1.default.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', { grant_type: 'client_credentials' }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${token}`
                }
            });
            return data.access_token;
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Error al crear el pago');
        }
    }
    async createPaymentOrder(user, paypalClientId) {
        const userCart = await this.cartService.getUserCart(Number(user.id));
        if (!userCart.cart_item.length)
            throw new common_1.NotFoundException('No se encontro el pedido');
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
            const { data } = await axios_1.default.post('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Error al crear el pago');
        }
    }
    async approvePaymentOrder(user, paypalClientId, transactionId) {
        const userCart = await this.cartService.getUserCart(Number(user.id));
        if (!userCart.cart_item.length)
            throw new common_1.NotFoundException('No se encontro el pedido');
        const order = await this.getOderByTransactionId(transactionId);
        const accessToken = await this.getOAuthToken(paypalClientId);
        const captureUrl = `https://api.sandbox.paypal.com/v2/checkout/orders/${transactionId}/capture`;
        try {
            await axios_1.default.post(captureUrl, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                }
            });
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
                    status: client_1.Status.Activo,
                }))
            });
            const amount = order.total;
            const recipientEmail = 'sb-jdbtg19938552@personal.example.com';
            const payoutUrl = 'https://api-m.sandbox.paypal.com/v1/payments/payouts';
            await axios_1.default.post(payoutUrl, {
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
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
            return orderDetail;
        }
        catch (error) {
            console.log(error);
            console.log(error.response.data);
            throw new common_1.InternalServerErrorException('Error al crear el pago');
        }
    }
    async removeOrder(transactionId) {
        const order = await this.getOderByTransactionId(transactionId);
        return this.order_ce.delete({
            where: {
                paypal_payment_id: order.paypal_payment_id
            }
        });
    }
    async getOderByTransactionId(transactionId) {
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
        if (!order)
            throw new common_1.NotFoundException('No se encontro el pedido');
        return order;
    }
    findAllUserOrders(userId) {
        return this.order_ce.findMany({
            where: {
                user_ce: { id: userId, status: client_1.Status.Activo },
                status: client_1.Status.Activo
            },
            include: {
                user_ce: { select: { name: true, lastName: true } },
            },
            orderBy: { creation_date: 'desc' },
        });
    }
    findAllUserSales(userId) {
        return this.order_ce.findMany({
            where: {
                order_detail: {
                    every: {
                        seller_id: userId
                    }
                },
                status: client_1.Status.Activo
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
    async getOderDetailByOrderId(id) {
        const order = await this.getOrderById(id);
        return this.order_detail.findMany({
            where: { order_ce: { id_order: order.id_order } },
            include: {
                product: {
                    where: {
                        status: client_1.Status.Activo,
                        predefinedProduct: {
                            status: client_1.Status.Activo,
                            category: { status: client_1.Status.Activo }
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
    async paymentByBankTransfer(user) {
        const userCart = await this.cartService.getUserCart(Number(user.id));
        if (!userCart.cart_item.length)
            throw new common_1.NotFoundException('No se encontro el pedido');
        try {
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
                    status: client_1.Status.Activo,
                }))
            });
            return { orderId: order.id_order };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException('Error al crear el pago');
        }
    }
    async getOrderById(id) {
        const order = await this.order_ce.findUnique({
            where: {
                id_order: id
            }
        });
        if (!order)
            throw new common_1.NotFoundException('No se encontro el pedido');
        return order;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cart_service_1.CartService])
], OrderService);
//# sourceMappingURL=order.service.js.map