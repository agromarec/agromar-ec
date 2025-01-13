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
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../config/db/prisma.service");
const users_1 = require("./data/users");
const produts_1 = require("./data/produts");
const unitMesure_1 = require("./data/unitMesure");
const sellerEmail = 'gobierno@gobierno.com';
let SeedService = class SeedService {
    constructor(prismaService) {
        this.user = prismaService.user_ce;
        this.user_roles = prismaService.user_role;
        this.product = prismaService.product;
        this.predifined_product = prismaService.predefined_product;
        this.productCategory = prismaService.product_category;
        this.unitOfMeasure = prismaService.unit_of_measure;
    }
    async executeAllSeeds() {
        await this.executeUsersSeed();
        await this.executeProductsSeed();
    }
    async executeUsersSeed() {
        await this.user_roles.deleteMany();
        await this.user.deleteMany();
        for (const user of users_1.USERS_SEED) {
            await this.user.create({
                data: user,
            });
        }
        return 'Seeded users successfully 🌱';
    }
    async executeProductsSeed() {
        await this.product.deleteMany();
        await this.predifined_product.deleteMany();
        await this.productCategory.deleteMany();
        const user = await this.user.findFirstOrThrow({ where: { email: sellerEmail } });
        const unitOfMesures = await this.unitOfMeasure.findMany();
        for (const product of (0, produts_1.GENERATE_PRODUCT_DATA)(Number(user.id), unitOfMesures)) {
            await this.predifined_product.create({
                data: product,
            });
        }
        return 'Seeded products successfully 🌱';
    }
    async executeUnitOfMeasuresSeed() {
        await this.unitOfMeasure.deleteMany();
        for (const unitMesure of unitMesure_1.UNIT_MESURES_SEED) {
            await this.unitOfMeasure.create({
                data: unitMesure,
            });
        }
        return 'Seeded unit of measure successfully 🌱';
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SeedService);
//# sourceMappingURL=seed.service.js.map