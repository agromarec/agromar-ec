import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/db/prisma.service';
import { USERS_SEED } from './data/users';

@Injectable()
export class SeedService {
  private readonly user_roles: PrismaService['user_role'];
  private readonly user: PrismaService['user_ce'];

  constructor(
    prismaService: PrismaService,
  ) {
    this.user = prismaService.user_ce;
    this.user_roles = prismaService.user_role;
  }

  executeAllSeeds() {
    return 'This action adds a new users';
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
}
