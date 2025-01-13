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
exports.UnitOfMesureService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../config/db/prisma.service");
const client_1 = require("@prisma/client");
let UnitOfMesureService = class UnitOfMesureService {
    constructor(prismaService) {
        this.unitOfMesure = prismaService.unit_of_measure;
    }
    async create(createUnitOfMesureDto) {
        return this.unitOfMesure.create({ data: createUnitOfMesureDto });
    }
    findAll() {
        return this.unitOfMesure.findMany({ where: { status: client_1.Status.Activo } });
    }
    findOne(id) {
        return this.getUnitOfMesure(id);
    }
    async update(id, updateUnitOfMesureDto) {
        const oldUnitOfMesure = await this.getUnitOfMesure(id);
        return await this.unitOfMesure.update({
            where: { id: oldUnitOfMesure.id },
            data: updateUnitOfMesureDto,
        });
    }
    async remove(id) {
        await this.getUnitOfMesure(id);
        return this.unitOfMesure.softDelete({ where: { id } });
    }
    async getUnitOfMesure(id) {
        const unitOfMesure = await this.unitOfMesure.findUnique({
            where: { id, status: client_1.Status.Activo },
        });
        if (!unitOfMesure)
            throw new common_1.NotFoundException(`UnitOfMesure with id ${id} not found`);
        return unitOfMesure;
    }
};
exports.UnitOfMesureService = UnitOfMesureService;
exports.UnitOfMesureService = UnitOfMesureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UnitOfMesureService);
//# sourceMappingURL=unit-of-mesure.service.js.map