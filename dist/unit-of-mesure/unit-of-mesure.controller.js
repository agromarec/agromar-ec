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
exports.UnitOfMesureController = void 0;
const common_1 = require("@nestjs/common");
const unit_of_mesure_service_1 = require("./unit-of-mesure.service");
const create_unit_of_mesure_dto_1 = require("./dto/create-unit-of-mesure.dto");
const update_unit_of_mesure_dto_1 = require("./dto/update-unit-of-mesure.dto");
let UnitOfMesureController = class UnitOfMesureController {
    constructor(unitOfMesureService) {
        this.unitOfMesureService = unitOfMesureService;
    }
    create(createUnitOfMesureDto) {
        return this.unitOfMesureService.create(createUnitOfMesureDto);
    }
    findAll() {
        return this.unitOfMesureService.findAll();
    }
    findOne(id) {
        return this.unitOfMesureService.findOne(id);
    }
    update(id, updateUnitOfMesureDto) {
        return this.unitOfMesureService.update(id, updateUnitOfMesureDto);
    }
    remove(id) {
        return this.unitOfMesureService.remove(+id);
    }
};
exports.UnitOfMesureController = UnitOfMesureController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_unit_of_mesure_dto_1.CreateUnitOfMesureDto]),
    __metadata("design:returntype", void 0)
], UnitOfMesureController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnitOfMesureController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UnitOfMesureController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_unit_of_mesure_dto_1.UpdateUnitOfMesureDto]),
    __metadata("design:returntype", void 0)
], UnitOfMesureController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UnitOfMesureController.prototype, "remove", null);
exports.UnitOfMesureController = UnitOfMesureController = __decorate([
    (0, common_1.Controller)('unit-of-mesures'),
    __metadata("design:paramtypes", [unit_of_mesure_service_1.UnitOfMesureService])
], UnitOfMesureController);
//# sourceMappingURL=unit-of-mesure.controller.js.map