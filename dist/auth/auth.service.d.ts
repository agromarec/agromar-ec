import { CreateUserDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/config/db/prisma.service';
import { ConfigService } from '@nestjs/config';
import { Envs } from 'src/config/env.config';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './guards';
import { UserType } from '@prisma/client';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { RegisterUserDto } from './dto/register-auth.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { UpdatePaymentMethodsDto } from './dto/update-payment-methods.dto';
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    private readonly user;
    constructor(configService: ConfigService<Envs>, jwtService: JwtService, prisma: PrismaService);
    createUser(createUserDto: CreateUserDto): Promise<{
        user_role: ({
            role_ce: {
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                name: string | null;
                observation: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                id_role: bigint;
            };
        } & {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
        })[];
    } & {
        id: bigint;
        address: string | null;
        creation_date: Date | null;
        creation_user: string | null;
        disabled: boolean | null;
        email: string | null;
        lastName: string | null;
        locked: boolean | null;
        modification_date: Date | null;
        modification_user: string | null;
        name: string | null;
        observation: string | null;
        businessDescription: string | null;
        password: string | null;
        paypalEmail: string | null;
        phone: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        userType: import("@prisma/client").$Enums.UserType;
        cantonId: bigint | null;
        paisId: bigint;
        userId: bigint | null;
        isOnline: boolean | null;
        allowPaypalPayments: boolean | null;
        allowBankTransfers: boolean | null;
        bankTransfersInfo: string | null;
        profilePicture: string | null;
    }>;
    registerUser(createUserDto: RegisterUserDto): Promise<{
        token: string;
        pais_ce: {
            creation_date: Date | null;
            creation_user: string | null;
            modification_date: Date | null;
            modification_user: string | null;
            name: string | null;
            observation: string | null;
            status: import("@prisma/client").$Enums.Status | null;
            id_pais: bigint;
        };
        user_role: ({
            role_ce: {
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                name: string | null;
                observation: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                id_role: bigint;
            };
        } & {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
        })[];
        id: bigint;
        address: string | null;
        creation_date: Date | null;
        creation_user: string | null;
        disabled: boolean | null;
        email: string | null;
        lastName: string | null;
        locked: boolean | null;
        modification_date: Date | null;
        modification_user: string | null;
        name: string | null;
        observation: string | null;
        businessDescription: string | null;
        password: string | null;
        paypalEmail: string | null;
        phone: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        userType: import("@prisma/client").$Enums.UserType;
        cantonId: bigint | null;
        paisId: bigint;
        userId: bigint | null;
        isOnline: boolean | null;
        allowPaypalPayments: boolean | null;
        allowBankTransfers: boolean | null;
        bankTransfersInfo: string | null;
        profilePicture: string | null;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        token: string;
        pais_ce: {
            creation_date: Date | null;
            creation_user: string | null;
            modification_date: Date | null;
            modification_user: string | null;
            name: string | null;
            observation: string | null;
            status: import("@prisma/client").$Enums.Status | null;
            id_pais: bigint;
        };
        user_role: ({
            role_ce: {
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                name: string | null;
                observation: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                id_role: bigint;
            };
        } & {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
        })[];
        id: bigint;
        address: string | null;
        creation_date: Date | null;
        creation_user: string | null;
        disabled: boolean | null;
        email: string | null;
        lastName: string | null;
        locked: boolean | null;
        modification_date: Date | null;
        modification_user: string | null;
        name: string | null;
        observation: string | null;
        businessDescription: string | null;
        password: string | null;
        paypalEmail: string | null;
        phone: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        userType: import("@prisma/client").$Enums.UserType;
        cantonId: bigint | null;
        paisId: bigint;
        userId: bigint | null;
        isOnline: boolean | null;
        allowPaypalPayments: boolean | null;
        allowBankTransfers: boolean | null;
        bankTransfersInfo: string | null;
        profilePicture: string | null;
    }>;
    checkToken(user: UserToken): Promise<{
        token: string;
        user_role: {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
        }[];
        id: bigint;
        address: string | null;
        creation_date: Date | null;
        creation_user: string | null;
        disabled: boolean | null;
        email: string | null;
        lastName: string | null;
        locked: boolean | null;
        modification_date: Date | null;
        modification_user: string | null;
        name: string | null;
        observation: string | null;
        businessDescription: string | null;
        password: string | null;
        paypalEmail: string | null;
        phone: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        userType: import("@prisma/client").$Enums.UserType;
        cantonId: bigint | null;
        paisId: bigint;
        userId: bigint | null;
        isOnline: boolean | null;
        allowPaypalPayments: boolean | null;
        allowBankTransfers: boolean | null;
        bankTransfersInfo: string | null;
        profilePicture: string | null;
    }>;
    private getJwtToken;
    findAll(currentUser: UserToken): Promise<({
        canton_ce: {
            province_ce: {
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                name: string | null;
                observation: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                id_province: bigint;
            };
        } & {
            id: bigint;
            creation_date: Date | null;
            creation_user: string | null;
            modification_date: Date | null;
            modification_user: string | null;
            observation: string | null;
            status: import("@prisma/client").$Enums.Status | null;
            nombre: string | null;
            provinceId: bigint;
        };
        user_role: {
            roleId: bigint;
        }[];
    } & {
        id: bigint;
        address: string | null;
        creation_date: Date | null;
        creation_user: string | null;
        disabled: boolean | null;
        email: string | null;
        lastName: string | null;
        locked: boolean | null;
        modification_date: Date | null;
        modification_user: string | null;
        name: string | null;
        observation: string | null;
        businessDescription: string | null;
        password: string | null;
        paypalEmail: string | null;
        phone: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        userType: import("@prisma/client").$Enums.UserType;
        cantonId: bigint | null;
        paisId: bigint;
        userId: bigint | null;
        isOnline: boolean | null;
        allowPaypalPayments: boolean | null;
        allowBankTransfers: boolean | null;
        bankTransfersInfo: string | null;
        profilePicture: string | null;
    })[]>;
    findById(id: number): Promise<{
        user_role: ({
            role_ce: {
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                name: string | null;
                observation: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                id_role: bigint;
            };
        } & {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
        })[];
    } & {
        id: bigint;
        address: string | null;
        creation_date: Date | null;
        creation_user: string | null;
        disabled: boolean | null;
        email: string | null;
        lastName: string | null;
        locked: boolean | null;
        modification_date: Date | null;
        modification_user: string | null;
        name: string | null;
        observation: string | null;
        businessDescription: string | null;
        password: string | null;
        paypalEmail: string | null;
        phone: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        userType: import("@prisma/client").$Enums.UserType;
        cantonId: bigint | null;
        paisId: bigint;
        userId: bigint | null;
        isOnline: boolean | null;
        allowPaypalPayments: boolean | null;
        allowBankTransfers: boolean | null;
        bankTransfersInfo: string | null;
        profilePicture: string | null;
    }>;
    private findByEmail;
    update(id: number, updateAuthDto: UpdateAuthDto): Promise<{
        id: bigint;
        address: string | null;
        creation_date: Date | null;
        creation_user: string | null;
        disabled: boolean | null;
        email: string | null;
        lastName: string | null;
        locked: boolean | null;
        modification_date: Date | null;
        modification_user: string | null;
        name: string | null;
        observation: string | null;
        businessDescription: string | null;
        password: string | null;
        paypalEmail: string | null;
        phone: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        userType: import("@prisma/client").$Enums.UserType;
        cantonId: bigint | null;
        paisId: bigint;
        userId: bigint | null;
        isOnline: boolean | null;
        allowPaypalPayments: boolean | null;
        allowBankTransfers: boolean | null;
        bankTransfersInfo: string | null;
        profilePicture: string | null;
    }>;
    updatePassword(user: UserToken, updateAuthDto: UpdatePasswordDto): Promise<{
        message: string;
    }>;
    updatePaymentMethods(user: UserToken, updatePaymentMethodsDto: UpdatePaymentMethodsDto): Promise<{
        id: bigint;
        address: string | null;
        creation_date: Date | null;
        creation_user: string | null;
        disabled: boolean | null;
        email: string | null;
        lastName: string | null;
        locked: boolean | null;
        modification_date: Date | null;
        modification_user: string | null;
        name: string | null;
        observation: string | null;
        businessDescription: string | null;
        password: string | null;
        paypalEmail: string | null;
        phone: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        userType: import("@prisma/client").$Enums.UserType;
        cantonId: bigint | null;
        paisId: bigint;
        userId: bigint | null;
        isOnline: boolean | null;
        allowPaypalPayments: boolean | null;
        allowBankTransfers: boolean | null;
        bankTransfersInfo: string | null;
        profilePicture: string | null;
    }>;
    updateSellerDescription(userId: number, description: string): Promise<{
        id: bigint;
        address: string | null;
        creation_date: Date | null;
        creation_user: string | null;
        disabled: boolean | null;
        email: string | null;
        lastName: string | null;
        locked: boolean | null;
        modification_date: Date | null;
        modification_user: string | null;
        name: string | null;
        observation: string | null;
        businessDescription: string | null;
        password: string | null;
        paypalEmail: string | null;
        phone: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        userType: import("@prisma/client").$Enums.UserType;
        cantonId: bigint | null;
        paisId: bigint;
        userId: bigint | null;
        isOnline: boolean | null;
        allowPaypalPayments: boolean | null;
        allowBankTransfers: boolean | null;
        bankTransfersInfo: string | null;
        profilePicture: string | null;
    }>;
    remove(id: number): Promise<boolean>;
    findUsersByType(type: UserType, currentUserId: number, filterUserDto: FilterUserDto): Promise<{
        data: {
            pais_ce: {
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                name: string | null;
                observation: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                id_pais: bigint;
            };
            product: {
                id: bigint;
                creation_date: Date | null;
                creation_user: string | null;
                modification_date: Date | null;
                modification_user: string | null;
                status: import("@prisma/client").$Enums.Status | null;
                description: string | null;
                price: number;
                seller_id: bigint;
                image: string | null;
                stock: number;
                predefinedProductId: bigint;
                unitOfMeasureId: bigint;
            }[];
            id: bigint;
            address: string;
            email: string;
            lastName: string;
            name: string;
            businessDescription: string;
            phone: string;
        }[];
        hasMore: boolean;
    }>;
    updateProfileUserPicture(id: number, user: UserToken, file: Express.Multer.File): import("@prisma/client/runtime/library").DynamicModelExtensionFluentApi<import("@prisma/client").Prisma.TypeMap<import("@prisma/client/runtime/library").InternalArgs & {
        result: {};
        model: {
            $allModels: {
                softDelete: () => <T>(this: T, { where }: {
                    where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"];
                }) => Promise<boolean>;
            };
            user_ce: {
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
    }, import("@prisma/client").Prisma.PrismaClientOptions>, "user_ce", "update", never, {}> & import("@prisma/client/runtime/library").PrismaPromise<{
        id: bigint;
        address: string | null;
        creation_date: Date | null;
        creation_user: string | null;
        disabled: boolean | null;
        email: string | null;
        lastName: string | null;
        locked: boolean | null;
        modification_date: Date | null;
        modification_user: string | null;
        name: string | null;
        observation: string | null;
        businessDescription: string | null;
        password: string | null;
        paypalEmail: string | null;
        phone: string | null;
        status: import("@prisma/client").$Enums.Status | null;
        userType: import("@prisma/client").$Enums.UserType;
        cantonId: bigint | null;
        paisId: bigint;
        userId: bigint | null;
        isOnline: boolean | null;
        allowPaypalPayments: boolean | null;
        allowBankTransfers: boolean | null;
        bankTransfersInfo: string | null;
        profilePicture: string | null;
    }>;
}
