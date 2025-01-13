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
exports.PredefinedProductController = void 0;
const common_1 = require("@nestjs/common");
const predefined_product_service_1 = require("./predefined-product.service");
const create_predefined_product_dto_1 = require("./dto/create-predefined-product.dto");
const update_predefined_product_dto_1 = require("./dto/update-predefined-product.dto");
let PredefinedProductController = class PredefinedProductController {
    constructor(predefinedProductService) {
        this.predefinedProductService = predefinedProductService;
    }
    create(createPredefinedProductDto) {
        return this.predefinedProductService.create(createPredefinedProductDto);
    }
    findAll() {
        return this.predefinedProductService.findAll();
    }
    findOne(id) {
        return this.predefinedProductService.findOne(+id);
    }
    update(id, updatePredefinedProductDto) {
        return this.predefinedProductService.update(+id, updatePredefinedProductDto);
    }
    remove(id) {
        return this.predefinedProductService.remove(+id);
    }
};
exports.PredefinedProductController = PredefinedProductController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_predefined_product_dto_1.CreatePredefinedProductDto]),
    __metadata("design:returntype", void 0)
], PredefinedProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PredefinedProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PredefinedProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_predefined_product_dto_1.UpdatePredefinedProductDto]),
    __metadata("design:returntype", void 0)
], PredefinedProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PredefinedProductController.prototype, "remove", null);
exports.PredefinedProductController = PredefinedProductController = __decorate([
    (0, common_1.Controller)('predefined-product'),
    __metadata("design:paramtypes", [predefined_product_service_1.PredefinedProductService])
], PredefinedProductController);
//# sourceMappingURL=predefined-product.controller.js.map