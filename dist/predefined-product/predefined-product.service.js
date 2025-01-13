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
exports.PredefinedProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../config/db/prisma.service");
const client_1 = require("@prisma/client");
let PredefinedProductService = class PredefinedProductService {
    constructor(prismaService) {
        this.predefinedProduct = prismaService.predefined_product;
    }
    create(createPredefinedProductDto) {
        const { category_id, ...rest } = createPredefinedProductDto;
        return this.predefinedProduct.create({
            data: {
                ...rest,
                category: { connect: { id: category_id } },
            },
        });
    }
    findAll() {
        return this.predefinedProduct.findMany({ include: { category: true }, where: { AND: { category: { status: client_1.Status.Activo } } } });
    }
    findOne(id) {
        return this.getPredefinedProduct(id);
    }
    async update(id, updatePredefinedProductDto) {
        await this.getPredefinedProduct(id);
        return this.predefinedProduct.update({
            where: { id },
            data: updatePredefinedProductDto,
        });
    }
    async remove(id) {
        await this.getPredefinedProduct(id);
        return this.predefinedProduct.softDelete({
            where: { id },
        });
    }
    getPredefinedProduct(id) {
        return this.predefinedProduct.findUnique({ where: { id } });
    }
};
exports.PredefinedProductService = PredefinedProductService;
exports.PredefinedProductService = PredefinedProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PredefinedProductService);
//# sourceMappingURL=predefined-product.service.js.map