import { CreateCommentDto } from './dto/create-comment.dto';
import { PrismaService } from 'src/config/db/prisma.service';
import { UserToken } from 'src/auth/guards';
export declare class CommentService {
    private readonly comment;
    constructor(prismaService: PrismaService);
    create(user: UserToken, createCommentDto: CreateCommentDto): import("@prisma/client/runtime/library").DynamicModelExtensionFluentApi<import("@prisma/client").Prisma.TypeMap<import("@prisma/client/runtime/library").InternalArgs & {
        result: {};
        model: {
            $allModels: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            ecommerce_model: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            canton_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            cart_item: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            comment_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            inventory_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            order_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            order_detail: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            pais_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            predefined_product: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            product: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            product_category: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            province_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            role_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            shopping_cart: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            unit_of_measure: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            user_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            chat_users: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            message_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            user_role: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            user_requests: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
        };
        query: {};
        client: {
            onModuleInit: () => () => Promise<void>;
            enableShutdownHooks: () => (app: import("@nestjs/common").INestApplication) => Promise<void>;
        };
    }, import("@prisma/client").Prisma.PrismaClientOptions>, "comment_ce", "create", never, {}> & import("@prisma/client/runtime/library").PrismaPromise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        creation_date: Date | null;
        product_id: bigint;
        id_comment: bigint;
        comentario: string | null;
        rating: number;
        user_id: bigint;
    }>;
    findAll(productId: number): import("@prisma/client/runtime/library").PrismaPromise<({
        user_ce: {
            name: string;
            lastName: string;
        };
    } & {
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        creation_date: Date | null;
        product_id: bigint;
        id_comment: bigint;
        comentario: string | null;
        rating: number;
        user_id: bigint;
    })[]>;
    remove(id: number): import("@prisma/client/runtime/library").DynamicModelExtensionFluentApi<import("@prisma/client").Prisma.TypeMap<import("@prisma/client/runtime/library").InternalArgs & {
        result: {};
        model: {
            $allModels: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            ecommerce_model: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            canton_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            cart_item: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            comment_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            inventory_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            order_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            order_detail: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            pais_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            predefined_product: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            product: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            product_category: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            province_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            role_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            shopping_cart: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            unit_of_measure: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            user_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            chat_users: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            message_ce: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            user_role: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            user_requests: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
        };
        query: {};
        client: {
            onModuleInit: () => () => Promise<void>;
            enableShutdownHooks: () => (app: import("@nestjs/common").INestApplication) => Promise<void>;
        };
    }, import("@prisma/client").Prisma.PrismaClientOptions>, "comment_ce", "delete", never, {}> & import("@prisma/client/runtime/library").PrismaPromise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        creation_date: Date | null;
        product_id: bigint;
        id_comment: bigint;
        comentario: string | null;
        rating: number;
        user_id: bigint;
    }>;
}
