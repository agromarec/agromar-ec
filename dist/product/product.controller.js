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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const pagination_dto_1 = require("../common/dtos/pagination.dto");
const decorators_1 = require("../auth/decorators");
const roles_enum_1 = require("../auth/enums/roles.enum");
const platform_express_1 = require("@nestjs/platform-express");
const get_user_decorator_1 = require("../auth/decorators/get-user.decorator");
const client_1 = require("@prisma/client");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    create(createProductDto, user, file) {
        return this.productService.create(createProductDto, user, file);
    }
    findAll(paginationDto) {
        return this.productService.findAll(paginationDto);
    }
    findAllBySeller(sellerId, paginationDto) {
        return this.productService.findAllBySellerId(paginationDto, sellerId);
    }
    findOne(id) {
        return this.productService.findOne(+id);
    }
    update(id, updateProductDto, user, file) {
        return this.productService.update(+id, updateProductDto, user, file);
    }
    remove(id, user) {
        return this.productService.remove(+id, user);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Auth)(roles_enum_1.Role.Admin, roles_enum_1.Role.Vendedor),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __param(2, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        fileIsRequired: false,
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 * 10, message: 'File is too big' }),
            new common_1.FileTypeValidator({ fileType: /^(image\/(jpeg|jpg|png|webp))$/ }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDTO]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('seller/:id'),
    (0, decorators_1.Auth)(roles_enum_1.Role.Admin, roles_enum_1.Role.Vendedor),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pagination_dto_1.PaginationDTO]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAllBySeller", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, decorators_1.Auth)(roles_enum_1.Role.Admin, roles_enum_1.Role.Vendedor),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __param(3, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        fileIsRequired: false,
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1024 * 1024 * 10, message: 'File is too big' }),
            new common_1.FileTypeValidator({ fileType: /^(image\/(jpeg|jpg|png|webp))$/ }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto, Object, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, decorators_1.Auth)(roles_enum_1.Role.Admin, roles_enum_1.Role.Vendedor),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map