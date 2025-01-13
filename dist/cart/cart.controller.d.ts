import { CartService } from './cart.service';
import { UpdateCartDto } from './dto/update-cart.dto';
import { UserToken } from 'src/auth/guards';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    findAll(user: UserToken): Promise<{
        cart_item: ({
            product: {
                user_ce: {
                    creation_date: Date | null;
                    creation_user: string | null;
                    modification_date: Date | null;
                    modification_user: string | null;
                    observation: string | null;
                    status: import("@prisma/client").$Enums.Status | null;
                    id: bigint;
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
                    profilePicture: string | null;
                };
                predefinedProduct: {
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
            status: import("@prisma/client").$Enums.Status | null;
            id_cart_item: bigint;
            price: number;
            quantity: number;
            product_id: bigint;
            shopping_cart_id: bigint;
        })[];
    } & {
        id_shopping_cart: bigint;
        creation_date: Date | null;
        creation_user: string | null;
        modification_date: Date | null;
        modification_user: string | null;
        observation: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        total: number;
        user_id: bigint;
    }>;
    update(updateCartDto: UpdateCartDto, user: UserToken): Promise<{
        cart_item: ({
            product: {
                user_ce: {
                    creation_date: Date | null;
                    creation_user: string | null;
                    modification_date: Date | null;
                    modification_user: string | null;
                    observation: string | null;
                    status: import("@prisma/client").$Enums.Status | null;
                    id: bigint;
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
                    profilePicture: string | null;
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
            status: import("@prisma/client").$Enums.Status | null;
            id_cart_item: bigint;
            price: number;
            quantity: number;
            product_id: bigint;
            shopping_cart_id: bigint;
        })[];
    } & {
        id_shopping_cart: bigint;
        creation_date: Date | null;
        creation_user: string | null;
        modification_date: Date | null;
        modification_user: string | null;
        observation: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        total: number;
        user_id: bigint;
    }>;
    remove(id: number): Promise<{
        id_shopping_cart: bigint;
        creation_date: Date | null;
        creation_user: string | null;
        modification_date: Date | null;
        modification_user: string | null;
        observation: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        total: number;
        user_id: bigint;
    }>;
}
