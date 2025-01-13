import { PrismaService } from 'src/config/db/prisma.service';
export declare class SeedService {
    private readonly user_roles;
    private readonly user;
    private readonly predifined_product;
    private readonly product;
    private readonly productCategory;
    private readonly unitOfMeasure;
    constructor(prismaService: PrismaService);
    executeAllSeeds(): Promise<void>;
    executeUsersSeed(): Promise<string>;
    executeProductsSeed(): Promise<string>;
    executeUnitOfMeasuresSeed(): Promise<string>;
}
