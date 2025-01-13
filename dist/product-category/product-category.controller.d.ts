import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
export declare class ProductCategoryController {
    private readonly productCategoryService;
    constructor(productCategoryService: ProductCategoryService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateProductCategoryDto: UpdateProductCategoryDto): Promise<{
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
    remove(id: string): Promise<boolean>;
}
