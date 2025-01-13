import { PrismaService } from 'src/config/db/prisma.service';
export declare class QuantityService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<{
        productQuantity: number;
        predefinedProductQuantity: number;
        productCategoryQuantity: number;
        unitOfMeasureQuantity: number;
        usersQuantity: number;
    }>;
}
