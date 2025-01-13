import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDTO } from '../common/dtos/pagination.dto';
import { Prisma } from '@prisma/client';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto, user: Prisma.user_ceGetPayload<{
        include: {
            user_role: true;
        };
    }>, file?: Express.Multer.File | undefined): import("@prisma/client/runtime/library").DynamicModelExtensionFluentApi<Prisma.TypeMap<import("@prisma/client/runtime/library").InternalArgs & {
        result: {};
        model: {
            $allModels: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            product: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            ecommerce_model: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            canton_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            cart_item: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            comment_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            inventory_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            order_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            order_detail: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            pais_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            predefined_product: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            product_category: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            province_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            role_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            shopping_cart: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            unit_of_measure: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            user_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            chat_users: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            message_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            user_role: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            user_requests: {
                softDelete: () => <T>(this: T, { where }: {
                    where: Prisma.Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
        };
        query: {};
        client: {
            onModuleInit: () => () => Promise<void>;
            enableShutdownHooks: () => (app: import("@nestjs/common").INestApplication) => Promise<void>;
        };
    }, Prisma.PrismaClientOptions>, "product", "create", never, {}> & import("@prisma/client/runtime/library").PrismaPromise<{
        id: bigint;
        creation_date: Date | null;
        creation_user: string | null;
        description: string | null;
        image: string | null;
        modification_date: Date | null;
        modification_user: string | null;
        price: number;
        status: import("@prisma/client").$Enums.Status | null;
        stock: number;
        predefinedProductId: bigint;
        seller_id: bigint;
        unitOfMeasureId: bigint;
    }>;
    findAll(paginationDto: PaginationDTO): Promise<{
        totalPages: number;
        hasMore: boolean;
        currentPage: number;
        products: ({
            user_ce: {
                name: string;
                email: string;
            };
            unitOfMeasure: {
                id: bigint;
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                name: string | null;
                abreviature: string | null;
            };
            predefinedProduct: {
                category: {
                    id: bigint;
                    creation_date: Date | null;
                    creation_user: string | null;
                    description: string | null;
                    modification_date: Date | null;
                    modification_user: string | null;
                    status: import("@prisma/client").$Enums.Status | null;
                    observation: string | null;
                    name: string | null;
                };
            } & {
                id: bigint;
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                observation: string | null;
                name: string | null;
                category_id: bigint;
            };
        } & {
            id: bigint;
            creation_date: Date | null;
            creation_user: string | null;
            description: string | null;
            image: string | null;
            modification_date: Date | null;
            modification_user: string | null;
            price: number;
            status: import("@prisma/client").$Enums.Status | null;
            stock: number;
            predefinedProductId: bigint;
            seller_id: bigint;
            unitOfMeasureId: bigint;
        })[];
    }>;
    findAllBySeller(sellerId: number, paginationDto: PaginationDTO): Promise<{
        totalPages: number;
        hasMore: boolean;
        currentPage: number;
        products: ({
            user_ce: {
                name: string;
                email: string;
                allowPaypalPayments: boolean;
                allowBankTransfers: boolean;
                bankTransfersInfo: string;
            };
            unitOfMeasure: {
                id: bigint;
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                name: string | null;
                abreviature: string | null;
            };
            predefinedProduct: {
                category: {
                    id: bigint;
                    creation_date: Date | null;
                    creation_user: string | null;
                    description: string | null;
                    modification_date: Date | null;
                    modification_user: string | null;
                    status: import("@prisma/client").$Enums.Status | null;
                    observation: string | null;
                    name: string | null;
                };
            } & {
                id: bigint;
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                observation: string | null;
                name: string | null;
                category_id: bigint;
            };
        } & {
            id: bigint;
            creation_date: Date | null;
            creation_user: string | null;
            description: string | null;
            image: string | null;
            modification_date: Date | null;
            modification_user: string | null;
            price: number;
            status: import("@prisma/client").$Enums.Status | null;
            stock: number;
            predefinedProductId: bigint;
            seller_id: bigint;
            unitOfMeasureId: bigint;
        })[];
        sellerInfo: {
            id: bigint;
            name: string;
            email: string;
            profilePicture: string;
        };
    }>;
    findOne(id: string): Promise<{
        user_ce: {
            name: string;
            email: string;
        };
        unitOfMeasure: {
            id: bigint;
            creation_date: Date | null;
            creation_user: string | null;
            modification_date: Date | null;
            modification_user: string | null;
            status: import("@prisma/client").$Enums.Status | null;
            name: string | null;
            abreviature: string | null;
        };
        predefinedProduct: {
            category: {
                id: bigint;
                creation_date: Date | null;
                creation_user: string | null;
                description: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                observation: string | null;
                name: string | null;
            };
        } & {
            id: bigint;
            creation_date: Date | null;
            creation_user: string | null;
            modification_date: Date | null;
            modification_user: string | null;
            status: import("@prisma/client").$Enums.Status | null;
            observation: string | null;
            name: string | null;
            category_id: bigint;
        };
    } & {
        id: bigint;
        creation_date: Date | null;
        creation_user: string | null;
        description: string | null;
        image: string | null;
        modification_date: Date | null;
        modification_user: string | null;
        price: number;
        status: import("@prisma/client").$Enums.Status | null;
        stock: number;
        predefinedProductId: bigint;
        seller_id: bigint;
        unitOfMeasureId: bigint;
    }>;
    update(id: string, updateProductDto: UpdateProductDto, user: Prisma.user_ceGetPayload<{
        include: {
            user_role: true;
        };
    }>, file?: Express.Multer.File | undefined): Promise<{
        id: bigint;
        creation_date: Date | null;
        creation_user: string | null;
        description: string | null;
        image: string | null;
        modification_date: Date | null;
        modification_user: string | null;
        price: number;
        status: import("@prisma/client").$Enums.Status | null;
        stock: number;
        predefinedProductId: bigint;
        seller_id: bigint;
        unitOfMeasureId: bigint;
    }>;
    remove(id: string, user: Prisma.user_ceGetPayload<{
        include: {
            user_role: true;
        };
    }>): Promise<boolean>;
}
