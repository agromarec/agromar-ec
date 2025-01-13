"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitOfMesureModule = void 0;
const common_1 = require("@nestjs/common");
const unit_of_mesure_service_1 = require("./unit-of-mesure.service");
const unit_of_mesure_controller_1 = require("./unit-of-mesure.controller");
let UnitOfMesureModule = class UnitOfMesureModule {
};
exports.UnitOfMesureModule = UnitOfMesureModule;
exports.UnitOfMesureModule = UnitOfMesureModule = __decorate([
    (0, common_1.Module)({
        controllers: [unit_of_mesure_controller_1.UnitOfMesureController],
        providers: [unit_of_mesure_service_1.UnitOfMesureService],
    })
], UnitOfMesureModule);
//# sourceMappingURL=unit-of-mesure.module.js.map