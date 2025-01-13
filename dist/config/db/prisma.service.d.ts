import { OnModuleInit, OnModuleDestroy, INestApplication } from '@nestjs/common';
import { Prisma } from '@prisma/client';
export declare const serializeData: <T>(data: any) => T;
declare function extendPrismaClient(): import("@prisma/client/runtime/library").DynamicClientExtensionThis<Prisma.TypeMap<import("@prisma/client/runtime/library").InternalArgs & {
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
        enableShutdownHooks: () => (app: INestApplication) => Promise<void>;
    };
}, Prisma.PrismaClientOptions>, Prisma.TypeMapCb, {
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
        enableShutdownHooks: () => (app: INestApplication) => Promise<void>;
    };
}, {}>;
declare const ExtendedPrismaClient: new () => ReturnType<typeof extendPrismaClient>;
export declare class PrismaService extends ExtendedPrismaClient implements OnModuleInit, OnModuleDestroy {
    onModuleDestroy(): Promise<void>;
}
export {};
