import { OrderService } from './order.service';
import { CreatePaymentOrderDto } from './dto/create-payment-order.dto';
import { UserToken } from 'src/auth/guards';
import { ApprovePaymentOrderDto } from './dto/approve-payment-order.dto';
export declare class OrderController {
    private readonly paymentService;
    constructor(paymentService: OrderService);
    createPaymentOrder(user: UserToken, body: CreatePaymentOrderDto): Promise<{
        transactionId: string;
        orderId: bigint;
    }>;
    approvePaymentOrder(user: UserToken, body: ApprovePaymentOrderDto): Promise<import("@prisma/client/runtime/library").GetBatchResult>;
    paymentByBankTransfer(user: UserToken): Promise<{
        orderId: bigint;
    }>;
    findAllUserOrders(user: UserToken): import("@prisma/client/runtime/library").PrismaPromise<({
        user_ce: {
            name: string;
            lastName: string;
        };
    } & {
        creation_date: Date | null;
        creation_user: string | null;
        modification_date: Date | null;
        modification_user: string | null;
        observation: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        total: number;
        id_order: bigint;
        order_date: Date | null;
        payment_method: string | null;
        paypal_payment_id: string | null;
        buyer_id: bigint;
    })[]>;
    findOne(orderId: number): Promise<({
        product: {
            user_ce: {
                name: string;
                lastName: string;
            };
            predefinedProduct: {
                category: {
                    creation_date: Date | null;
                    creation_user: string | null;
                    modification_date: Date | null;
                    modification_user: string | null;
                    observation: string | null;
                    status: import("@prisma/client").$Enums.Status | null;
                    description: string | null;
                    id: bigint;
                    name: string | null;
                };
            } & {
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                observation: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                id: bigint;
                name: string | null;
                category_id: bigint;
            };
        } & {
            creation_date: Date | null;
            creation_user: string | null;
            modification_date: Date | null;
            modification_user: string | null;
            status: import("@prisma/client").$Enums.Status | null;
            description: string | null;
            id: bigint;
            price: number;
            seller_id: bigint;
            image: string | null;
            stock: number;
            predefinedProductId: bigint;
            unitOfMeasureId: bigint;
        };
    } & {
        creation_date: Date | null;
        creation_user: string | null;
        modification_date: Date | null;
        modification_user: string | null;
        observation: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        quantity: number | null;
        product_id: bigint | null;
        id_order_detail: bigint;
        guia: string | null;
        subtotal: number | null;
        unit_price: number | null;
        order_id: bigint | null;
        seller_id: bigint | null;
    })[]>;
    findAllUserSales(user: UserToken): import("@prisma/client/runtime/library").PrismaPromise<({
        order_detail: ({
            product: {
                user_ce: {
                    name: string;
                    lastName: string;
                };
                predefinedProduct: {
                    category: {
                        creation_date: Date | null;
                        creation_user: string | null;
                        modification_date: Date | null;
                        modification_user: string | null;
                        observation: string | null;
                        status: import("@prisma/client").$Enums.Status | null;
                        description: string | null;
                        id: bigint;
                        name: string | null;
                    };
                };
            } & {
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                description: string | null;
                id: bigint;
                price: number;
                seller_id: bigint;
                image: string | null;
                stock: number;
                predefinedProductId: bigint;
                unitOfMeasureId: bigint;
            };
        } & {
            creation_date: Date | null;
            creation_user: string | null;
            modification_date: Date | null;
            modification_user: string | null;
            observation: string | null;
            status: import("@prisma/client").$Enums.Status | null;
            quantity: number | null;
            product_id: bigint | null;
            id_order_detail: bigint;
            guia: string | null;
            subtotal: number | null;
            unit_price: number | null;
            order_id: bigint | null;
            seller_id: bigint | null;
        })[];
        user_ce: {
            name: string;
            lastName: string;
        };
    } & {
        creation_date: Date | null;
        creation_user: string | null;
        modification_date: Date | null;
        modification_user: string | null;
        observation: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        total: number;
        id_order: bigint;
        order_date: Date | null;
        payment_method: string | null;
        paypal_payment_id: string | null;
        buyer_id: bigint;
    })[]>;
    remove(transactionId: string): Promise<{
        creation_date: Date | null;
        creation_user: string | null;
        modification_date: Date | null;
        modification_user: string | null;
        observation: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        total: number;
        id_order: bigint;
        order_date: Date | null;
        payment_method: string | null;
        paypal_payment_id: string | null;
        buyer_id: bigint;
    }>;
}
