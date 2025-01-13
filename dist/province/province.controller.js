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
exports.ProvinceController = void 0;
const common_1 = require("@nestjs/common");
const province_service_1 = require("./province.service");
const create_province_dto_1 = require("./dto/create-province.dto");
const update_province_dto_1 = require("./dto/update-province.dto");
let ProvinceController = class ProvinceController {
    constructor(provinceService) {
        this.provinceService = provinceService;
    }
    create(createProvinceDto) {
        return this.provinceService.create(createProvinceDto);
    }
    findAll() {
        return this.provinceService.findAll();
    }
    findOne(id) {
        return this.provinceService.findOne(+id);
    }
    update(id, updateProvinceDto) {
        return this.provinceService.update(+id, updateProvinceDto);
    }
    remove(id) {
        return this.provinceService.remove(+id);
    }
};
exports.ProvinceController = ProvinceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_province_dto_1.CreateProvinceDto]),
    __metadata("design:returntype", void 0)
], ProvinceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProvinceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProvinceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_province_dto_1.UpdateProvinceDto]),
    __metadata("design:returntype", void 0)
], ProvinceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProvinceController.prototype, "remove", null);
exports.ProvinceController = ProvinceController = __decorate([
    (0, common_1.Controller)('province'),
    __metadata("design:paramtypes", [province_service_1.ProvinceService])
], ProvinceController);
//# sourceMappingURL=province.controller.js.map