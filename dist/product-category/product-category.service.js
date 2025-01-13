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
exports.ProductCategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../config/db/prisma.service");
const client_1 = require("@prisma/client");
let ProductCategoryService = class ProductCategoryService {
    constructor(prismaService) {
        this.productCategory = prismaService.product_category;
    }
    async create(createProductCategoryDto) {
        return await this.productCategory.create({
            data: createProductCategoryDto,
        });
    }
    findAll() {
        return this.productCategory.findMany({ where: { status: client_1.Status.Activo } });
    }
    findOne(id) {
        return this.getProductCategory(id);
    }
    async update(id, updateProductCategoryDto) {
        await this.getProductCategory(id);
        return this.productCategory.update({
            where: { id, status: client_1.Status.Activo },
            data: updateProductCategoryDto,
        });
    }
    async remove(id) {
        await this.getProductCategory(id);
        return this.productCategory.softDelete({ where: { id } });
    }
    async getProductCategory(id) {
        const productCategory = await this.productCategory.findUnique({
            where: { id, status: client_1.Status.Activo },
        });
        if (!productCategory)
            throw new common_1.NotFoundException(`ProductCategory with id ${id} not found`);
        return productCategory;
    }
};
exports.ProductCategoryService = ProductCategoryService;
exports.ProductCategoryService = ProductCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductCategoryService);
//# sourceMappingURL=product-category.service.js.map