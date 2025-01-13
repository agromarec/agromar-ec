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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../config/db/prisma.service");
const client_1 = require("@prisma/client");
let CartService = class CartService {
    constructor(prismaService) {
        this.cart = prismaService.shopping_cart;
        this.cartItem = prismaService.cart_item;
    }
    async getUserCart(userId) {
        const result = await this.cart.findUnique({ where: { user_id: userId }, include: { cart_item: { include: { product: { include: { user_ce: true } } } } } });
        if (!result)
            throw new common_1.NotFoundException('No se encontro el pedido');
        return result;
    }
    async update(updateCartDto, userId) {
        let cart = await this.cart.findUnique({ where: { user_id: userId, status: client_1.Status.Activo } });
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
            throw new common_1.BadRequestException('Producto no existe');
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
    async remove(id) {
        await this.cartItem.deleteMany({ where: { shopping_cart_id: id } });
        return this.cart.delete({ where: { id_shopping_cart: id, status: client_1.Status.Activo } });
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map