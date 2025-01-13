import { CantonService } from './canton.service';
export declare class CantonController {
    private readonly cantonService;
    constructor(cantonService: CantonService);
    findAll(): import("@prisma/client/runtime/library").PrismaPromise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        id: bigint;
        creation_date: Date | null;
        nombre: string | null;
        provinceId: bigint;
    }[]>;
    findOne(id: number): Promise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        id: bigint;
        creation_date: Date | null;
        nombre: string | null;
        provinceId: bigint;
    }>;
    getCantonesByProvinceId(provinceId: number): import("@prisma/client/runtime/library").PrismaPromise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        id: bigint;
        creation_date: Date | null;
        nombre: string | null;
        provinceId: bigint;
    }[]>;
}
