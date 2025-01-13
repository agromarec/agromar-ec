import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/config/db/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly user;
    constructor(configService: ConfigService, prisma: PrismaService);
    validate(payload: {
        id: number;
    }): Promise<{
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
        user_role: {
            id: bigint;
            userId: bigint | null;
            roleId: bigint | null;
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
    }>;
}
export {};
