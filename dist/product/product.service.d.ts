import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';
import { PrismaService } from 'src/config/db/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ProductService {
    private readonly product;
    constructor(prismaService: PrismaService);
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
            product: {
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
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        description: string | null;
        id: bigint;
        creation_date: Date | null;
        price: number;
        seller_id: bigint;
        image: string | null;
        stock: number;
        predefinedProductId: bigint;
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
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                id: bigint;
                creation_date: Date | null;
                name: string | null;
                abreviature: string | null;
            };
            predefinedProduct: {
                category: {
                    status: import("@prisma/client").$Enums.Status | null;
                    modification_date: Date | null;
                    creation_user: string | null;
                    modification_user: string | null;
                    observation: string | null;
                    description: string | null;
                    id: bigint;
                    creation_date: Date | null;
                    name: string | null;
                };
            } & {
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                observation: string | null;
                id: bigint;
                creation_date: Date | null;
                name: string | null;
                category_id: bigint;
            };
        } & {
            status: import("@prisma/client").$Enums.Status | null;
            modification_date: Date | null;
            creation_user: string | null;
            modification_user: string | null;
            description: string | null;
            id: bigint;
            creation_date: Date | null;
            price: number;
            seller_id: bigint;
            image: string | null;
            stock: number;
            predefinedProductId: bigint;
            unitOfMeasureId: bigint;
        })[];
    }>;
    findAllBySellerId(paginationDto: PaginationDTO, sellerId: number): Promise<{
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
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                id: bigint;
                creation_date: Date | null;
                name: string | null;
                abreviature: string | null;
            };
            predefinedProduct: {
                category: {
                    status: import("@prisma/client").$Enums.Status | null;
                    modification_date: Date | null;
                    creation_user: string | null;
                    modification_user: string | null;
                    observation: string | null;
                    description: string | null;
                    id: bigint;
                    creation_date: Date | null;
                    name: string | null;
                };
            } & {
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                observation: string | null;
                id: bigint;
                creation_date: Date | null;
                name: string | null;
                category_id: bigint;
            };
        } & {
            status: import("@prisma/client").$Enums.Status | null;
            modification_date: Date | null;
            creation_user: string | null;
            modification_user: string | null;
            description: string | null;
            id: bigint;
            creation_date: Date | null;
            price: number;
            seller_id: bigint;
            image: string | null;
            stock: number;
            predefinedProductId: bigint;
            unitOfMeasureId: bigint;
        })[];
    }>;
    findOne(id: number): Promise<{
        user_ce: {
            name: string;
            email: string;
        };
        unitOfMeasure: {
            status: import("@prisma/client").$Enums.Status | null;
            modification_date: Date | null;
            creation_user: string | null;
            modification_user: string | null;
            id: bigint;
            creation_date: Date | null;
            name: string | null;
            abreviature: string | null;
        };
        predefinedProduct: {
            category: {
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                observation: string | null;
                description: string | null;
                id: bigint;
                creation_date: Date | null;
                name: string | null;
            };
        } & {
            status: import("@prisma/client").$Enums.Status | null;
            modification_date: Date | null;
            creation_user: string | null;
            modification_user: string | null;
            observation: string | null;
            id: bigint;
            creation_date: Date | null;
            name: string | null;
            category_id: bigint;
        };
    } & {
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        description: string | null;
        id: bigint;
        creation_date: Date | null;
        price: number;
        seller_id: bigint;
        image: string | null;
        stock: number;
        predefinedProductId: bigint;
        unitOfMeasureId: bigint;
    }>;
    update(id: number, updateProductDto: UpdateProductDto, user: Prisma.user_ceGetPayload<{
        include: {
            user_role: true;
        };
    }>, file?: Express.Multer.File | undefined): Promise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        description: string | null;
        id: bigint;
        creation_date: Date | null;
        price: number;
        seller_id: bigint;
        image: string | null;
        stock: number;
        predefinedProductId: bigint;
        unitOfMeasureId: bigint;
    }>;
    remove(id: number, user: Prisma.user_ceGetPayload<{
        include: {
            user_role: true;
        };
    }>): Promise<boolean>;
    private getProduct;
}
