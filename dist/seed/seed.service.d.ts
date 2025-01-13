import { PrismaService } from 'src/config/db/prisma.service';
export declare class SeedService {
    private readonly user_roles;
    private readonly user;
    constructor(prismaService: PrismaService);
    executeAllSeeds(): string;
    executeUsersSeed(): Promise<string>;
}
