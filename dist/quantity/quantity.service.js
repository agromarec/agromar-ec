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
exports.QuantityService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../config/db/prisma.service");
let QuantityService = class QuantityService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        const [productQuantity, predefinedProductQuantity, productCategoryQuantity, unitOfMeasureQuantity, usersQuantity,] = await Promise.all([
            this.prismaService.product.count({ where: { status: client_1.Status.Activo } }),
            this.prismaService.predefined_product.count({ where: { status: client_1.Status.Activo } }),
            this.prismaService.product_category.count({ where: { status: client_1.Status.Activo } }),
            this.prismaService.unit_of_measure.count({ where: { status: client_1.Status.Activo } }),
            this.prismaService.user_ce.count({ where: { status: client_1.Status.Activo } }),
        ]);
        return {
            productQuantity,
            predefinedProductQuantity,
            productCategoryQuantity,
            unitOfMeasureQuantity,
            usersQuantity,
        };
    }
};
exports.QuantityService = QuantityService;
exports.QuantityService = QuantityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuantityService);
//# sourceMappingURL=quantity.service.js.map