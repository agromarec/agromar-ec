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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../config/db/prisma.service");
const path_1 = require("path");
const fs_1 = require("fs");
const client_1 = require("@prisma/client");
const roles_enum_1 = require("../auth/enums/roles.enum");
let ProductService = class ProductService {
    constructor(prismaService) {
        this.product = prismaService.product;
    }
    create(createProductDto, user, file) {
        let fileName = null;
        if (file) {
            const directoryPath = (0, path_1.join)(__dirname, '..', '..', 'static', 'products');
            if (!(0, fs_1.existsSync)(directoryPath))
                (0, fs_1.mkdirSync)(directoryPath, { recursive: true });
            const getUuid = crypto.randomUUID.bind(crypto);
            const fileExtension = file.mimetype.split('/')[1];
            fileName = `${getUuid()}.${fileExtension}`;
            const filePath = (0, path_1.join)(directoryPath, fileName);
            (0, fs_1.writeFileSync)(filePath, file.buffer);
        }
        return this.product.create({
            data: {
                description: createProductDto.description,
                price: createProductDto.price,
                stock: createProductDto.stock,
                image: fileName,
                creation_user: user.name,
                modification_user: user.name,
                unitOfMeasure: { connect: { id: createProductDto.unitOfMeasure } },
                predefinedProduct: { connect: { id: createProductDto.predefinedProduct } },
                user_ce: { connect: { id: user.id } },
            }
        });
    }
    async findAll(paginationDto) {
        const { page = 1, size = 10 } = paginationDto;
        const products = await this.product.findMany({
            skip: (page - 1) * size,
            take: size,
            include: {
                predefinedProduct: {
                    include: { category: true }
                },
                unitOfMeasure: true,
                user_ce: {
                    select: { name: true, email: true },
                },
            },
            where: {
                AND: [
                    {
                        predefinedProduct: { category: { status: client_1.Status.Activo } },
                    },
                    {
                        predefinedProduct: { status: client_1.Status.Activo },
                        unitOfMeasure: { status: client_1.Status.Activo },
                        user_ce: { status: client_1.Status.Activo },
                    }
                ]
            },
            orderBy: { creation_date: 'desc' },
        });
        const totalProducts = await this.product.count();
        const totalPages = Math.ceil(totalProducts / size);
        const hasMore = page < totalPages;
        return {
            totalPages,
            hasMore,
            currentPage: page,
            products,
        };
    }
    async findAllBySellerId(paginationDto, sellerId) {
        const { page = 1, size = 10 } = paginationDto;
        const products = await this.product.findMany({
            skip: (page - 1) * size,
            take: size,
            include: {
                predefinedProduct: {
                    include: { category: true }
                },
                unitOfMeasure: true,
                user_ce: {
                    select: { name: true, email: true, allowBankTransfers: true, allowPaypalPayments: true, bankTransfersInfo: true },
                },
            },
            where: {
                seller_id: sellerId,
                AND: [
                    {
                        predefinedProduct: { category: { status: client_1.Status.Activo } },
                    },
                    {
                        predefinedProduct: { status: client_1.Status.Activo },
                        unitOfMeasure: { status: client_1.Status.Activo },
                        user_ce: { status: client_1.Status.Activo },
                    }
                ]
            },
            orderBy: { creation_date: 'desc' },
        });
        const totalProducts = await this.product.count();
        const totalPages = Math.ceil(totalProducts / size);
        const hasMore = page < totalPages;
        return {
            totalPages,
            hasMore,
            currentPage: page,
            products,
        };
    }
    findOne(id) {
        return this.getProduct(id);
    }
    async update(id, updateProductDto, user, file) {
        const oldProduct = await this.getProduct(id);
        if (user.user_role.every(role => Number(role.roleId) !== roles_enum_1.Role.Admin)) {
            if (oldProduct.seller_id !== user.id) {
                throw new common_1.ForbiddenException('No tienes permisos para modificar este producto');
            }
        }
        let fileName = null;
        if (file) {
            const directoryPath = (0, path_1.join)(__dirname, '..', '..', 'static', 'products');
            if (!(0, fs_1.existsSync)(directoryPath))
                (0, fs_1.mkdirSync)(directoryPath, { recursive: true });
            if (oldProduct.image) {
                const oldFilePath = (0, path_1.join)(directoryPath, oldProduct.image);
                if ((0, fs_1.existsSync)(oldFilePath))
                    (0, fs_1.unlinkSync)(oldFilePath);
            }
            const getUuid = crypto.randomUUID.bind(crypto);
            const fileExtension = file.mimetype.split('/')[1];
            fileName = `${getUuid()}.${fileExtension}`;
            const filePath = (0, path_1.join)(directoryPath, fileName);
            (0, fs_1.writeFileSync)(filePath, file.buffer);
        }
        return this.product.update({
            where: { id },
            data: {
                description: updateProductDto.description,
                price: updateProductDto.price,
                stock: updateProductDto.stock,
                image: file ? fileName : oldProduct.image,
                status: updateProductDto.status,
                creation_user: user.name,
                modification_user: user.name,
                unitOfMeasure: { connect: { id: updateProductDto.unitOfMeasure } },
                predefinedProduct: { connect: { id: updateProductDto.predefinedProduct } },
                user_ce: { connect: { id: user.id } },
            }
        });
    }
    async remove(id, user) {
        const product = await this.getProduct(id);
        if (user.user_role.every(role => Number(role.roleId) !== roles_enum_1.Role.Admin)) {
            if (product.seller_id !== user.id) {
                throw new common_1.ForbiddenException('No tienes permisos para modificar este producto');
            }
        }
        return this.product.softDelete({ where: { id: product.id } });
    }
    async getProduct(id) {
        const product = await this.product.findUnique({
            where: { id, status: client_1.Status.Activo },
            include: {
                predefinedProduct: {
                    include: { category: true }
                },
                unitOfMeasure: true,
                user_ce: {
                    select: { name: true, email: true }
                },
            }
        });
        if (!product)
            throw new common_1.NotFoundException(`Product with id ${id} not found`);
        return product;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map