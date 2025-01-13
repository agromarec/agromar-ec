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
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                observation: string | null;
                creation_date: Date | null;
                name: string | null;
                id_role: bigint;
            };
        } & {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
        })[];
    } & {
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
    }>;
    registerUser(createUserDto: RegisterUserDto): Promise<{
        token: string;
        pais_ce: {
            status: import("@prisma/client").$Enums.Status | null;
            modification_date: Date | null;
            creation_user: string | null;
            modification_user: string | null;
            observation: string | null;
            creation_date: Date | null;
            id_pais: bigint;
            name: string | null;
        };
        user_role: ({
            role_ce: {
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                observation: string | null;
                creation_date: Date | null;
                name: string | null;
                id_role: bigint;
            };
        } & {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
        })[];
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
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        token: string;
        pais_ce: {
            status: import("@prisma/client").$Enums.Status | null;
            modification_date: Date | null;
            creation_user: string | null;
            modification_user: string | null;
            observation: string | null;
            creation_date: Date | null;
            id_pais: bigint;
            name: string | null;
        };
        user_role: ({
            role_ce: {
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                observation: string | null;
                creation_date: Date | null;
                name: string | null;
                id_role: bigint;
            };
        } & {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
        })[];
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
    }>;
    checkToken(user: UserToken): Promise<{
        token: string;
        user_role: {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
        }[];
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
    }>;
    private getJwtToken;
    findAll(currentUser: UserToken): Promise<({
        canton_ce: {
            province_ce: {
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                observation: string | null;
                creation_date: Date | null;
                name: string | null;
                id_province: bigint;
            };
        } & {
            status: import("@prisma/client").$Enums.Status | null;
            modification_date: Date | null;
            creation_user: string | null;
            modification_user: string | null;
            observation: string | null;
            id: bigint;
            creation_date: Date | null;
            nombre: string | null;
            provinceId: bigint;
        };
        user_role: {
            roleId: bigint;
        }[];
    } & {
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
    })[]>;
    findById(id: number): Promise<{
        user_role: ({
            role_ce: {
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                observation: string | null;
                creation_date: Date | null;
                name: string | null;
                id_role: bigint;
            };
        } & {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
        })[];
    } & {
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
    }>;
    private findByEmail;
    update(id: number, updateAuthDto: UpdateAuthDto): Promise<{
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
    }>;
    updatePassword(user: UserToken, updateAuthDto: UpdatePasswordDto): Promise<{
        message: string;
    }>;
    updatePaymentMethods(user: UserToken, updatePaymentMethodsDto: UpdatePaymentMethodsDto): Promise<{
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
    }>;
    updateSellerDescription(userId: number, description: string): Promise<{
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
    }>;
    remove(id: number): Promise<boolean>;
    findUsersByType(type: UserType, currentUserId: number, filterUserDto: FilterUserDto): Promise<{
        data: {
            pais_ce: {
                status: import("@prisma/client").$Enums.Status | null;
                modification_date: Date | null;
                creation_user: string | null;
                modification_user: string | null;
                observation: string | null;
                creation_date: Date | null;
                id_pais: bigint;
                name: string | null;
            };
            product: {
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
            }[];
            id: bigint;
            name: string;
            address: string;
            email: string;
            lastName: string;
            businessDescription: string;
            phone: string;
        }[];
        hasMore: boolean;
    }>;
}
