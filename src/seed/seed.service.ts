import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/db/prisma.service';
import { USERS_SEED } from './data/users';
import { GENERATE_PRODUCT_DATA } from './data/produts';
import { UNIT_MESURES_SEED } from './data/unitMesure';

const sellerEmail = 'gobierno@gobierno.com';

@Injectable()
export class SeedService {
  private readonly user_roles: PrismaService['user_role'];
  private readonly user: PrismaService['user_ce'];
  private readonly predifined_product: PrismaService['predefined_product'];
  private readonly product: PrismaService['product'];
  private readonly productCategory: PrismaService['product_category'];
  private readonly unitOfMeasure: PrismaService['unit_of_measure'];

  constructor(
    prismaService: PrismaService,
  ) {
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
    // const users = await this.user.findMany();
    // if (users.length) return 'This action adds a new users';

    // DELETE ALL USERS
    await this.user_roles.deleteMany();
    await this.user.deleteMany();

    for (const user of USERS_SEED) {
      await this.user.create({
        data: user,
      });
    }

    return 'Seeded users successfully 🌱';
  }

  async executeProductsSeed() {
    // DELETE ALL PRODUCTS
    await this.product.deleteMany();
    await this.predifined_product.deleteMany();
    await this.productCategory.deleteMany();

    const user = await this.user.findFirstOrThrow({ where: { email: sellerEmail } });
    const unitOfMesures = await this.unitOfMeasure.findMany();

    for (const product of GENERATE_PRODUCT_DATA(Number(user.id), unitOfMesures)) {
      await this.predifined_product.create({
        data: product,
      });
    }
    return 'Seeded products successfully 🌱';
  }

  async executeUnitOfMeasuresSeed() {
    // DELETE ALL UNIT OF MESURES
    await this.unitOfMeasure.deleteMany();

    for (const unitMesure of UNIT_MESURES_SEED) {
      await this.unitOfMeasure.create({
        data: unitMesure,
      });
    }


    return 'Seeded unit of measure successfully 🌱';
  }
}
