import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from '../config/db/prisma.service';
export declare class CartService {
    private readonly cart;
    private readonly cartItem;
    constructor(prismaService: PrismaService);
    getUserCart(userId: number): Promise<{
        cart_item: ({
            product: {
                user_ce: {
                    status: import("@prisma/client").$Enums.Status | null;
                    modification_date: Date | null;
                    creation_user: string | null;
                    modification_user: string | null;
                    observation: string | null;
                    id: bigint;
                    creation_date: Date | null;
                    name: string | null;
                    address: string | null;
                    disabled: boolean | null;
                    email: string | null;
                    lastName: string | null;
                    locked: boolean | null;
                    businessDescription: string | null;
                    password: string | null;
                    paypalEmail: string | null;
                    phone: string | null;
                    userType: import("@prisma/client").$Enums.UserType;
                    cantonId: bigint | null;
                    paisId: bigint;
                    userId: bigint | null;
                    isOnline: boolean | null;
                    allowPaypalPayments: boolean | null;
                    allowBankTransfers: boolean | null;
                    bankTransfersInfo: string | null;
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
            };
        } & {
            status: import("@prisma/client").$Enums.Status | null;
            id_cart_item: bigint;
            price: number;
            quantity: number;
            product_id: bigint;
            shopping_cart_id: bigint;
        })[];
    } & {
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        creation_date: Date | null;
        user_id: bigint;
        total: number;
        id_shopping_cart: bigint;
    }>;
    update(updateCartDto: UpdateCartDto, userId: number): Promise<{
        cart_item: ({
            product: {
                user_ce: {
                    status: import("@prisma/client").$Enums.Status | null;
                    modification_date: Date | null;
                    creation_user: string | null;
                    modification_user: string | null;
                    observation: string | null;
                    id: bigint;
                    creation_date: Date | null;
                    name: string | null;
                    address: string | null;
                    disabled: boolean | null;
                    email: string | null;
                    lastName: string | null;
                    locked: boolean | null;
                    businessDescription: string | null;
                    password: string | null;
                    paypalEmail: string | null;
                    phone: string | null;
                    userType: import("@prisma/client").$Enums.UserType;
                    cantonId: bigint | null;
                    paisId: bigint;
                    userId: bigint | null;
                    isOnline: boolean | null;
                    allowPaypalPayments: boolean | null;
                    allowBankTransfers: boolean | null;
                    bankTransfersInfo: string | null;
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
            };
        } & {
            status: import("@prisma/client").$Enums.Status | null;
            id_cart_item: bigint;
            price: number;
            quantity: number;
            product_id: bigint;
            shopping_cart_id: bigint;
        })[];
    } & {
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        creation_date: Date | null;
        user_id: bigint;
        total: number;
        id_shopping_cart: bigint;
    }>;
    remove(id: number): Promise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        creation_date: Date | null;
        user_id: bigint;
        total: number;
        id_shopping_cart: bigint;
    }>;
}
