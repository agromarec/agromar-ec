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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const create_payment_order_dto_1 = require("./dto/create-payment-order.dto");
const decorators_1 = require("../auth/decorators");
const get_user_decorator_1 = require("../auth/decorators/get-user.decorator");
const approve_payment_order_dto_1 = require("./dto/approve-payment-order.dto");
let OrderController = class OrderController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    createPaymentOrder(user, body) {
        return this.paymentService.createPaymentOrder(user, body.paypalClientId);
    }
    approvePaymentOrder(user, body) {
        return this.paymentService.approvePaymentOrder(user, body.paypalClientId, body.transactionId);
    }
    findAllUserOrders(user) {
        return this.paymentService.findAllUserOrders(Number(user.id));
    }
    findOne(orderId) {
        return this.paymentService.getOderDetailByOrderId(orderId);
    }
    findAllUserSales(user) {
        return this.paymentService.findAllUserSales(Number(user.id));
    }
    remove(transactionId) {
        return this.paymentService.removeOrder(transactionId);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)('/payment'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_payment_order_dto_1.CreatePaymentOrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "createPaymentOrder", null);
__decorate([
    (0, common_1.Post)('/payment/approve'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, approve_payment_order_dto_1.ApprovePaymentOrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "approvePaymentOrder", null);
__decorate([
    (0, common_1.Get)('/orders'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "findAllUserOrders", null);
__decorate([
    (0, common_1.Get)('/orders/details/:orderId'),
    __param(0, (0, common_1.Param)('orderId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/orders/sales'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "findAllUserSales", null);
__decorate([
    (0, common_1.Delete)('/payment/:transactionId'),
    __param(0, (0, common_1.Param)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "remove", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)(),
    (0, decorators_1.Auth)(),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map