import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { PrismaService } from 'src/config/db/prisma.service';
export declare class ProductCategoryService {
    private readonly productCategory;
    constructor(prismaService: PrismaService);
    create(createProductCategoryDto: CreateProductCategoryDto): Promise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        description: string | null;
        id: bigint;
        creation_date: Date | null;
        name: string | null;
    }>;
    findAll(): import("@prisma/client/runtime/library").PrismaPromise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        description: string | null;
        id: bigint;
        creation_date: Date | null;
        name: string | null;
    }[]>;
    findOne(id: number): Promise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        description: string | null;
        id: bigint;
        creation_date: Date | null;
        name: string | null;
    }>;
    update(id: number, updateProductCategoryDto: UpdateProductCategoryDto): Promise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        description: string | null;
        id: bigint;
        creation_date: Date | null;
        name: string | null;
    }>;
    remove(id: number): Promise<boolean>;
    private getProductCategory;
}
