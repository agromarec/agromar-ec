import { CreateUnitOfMesureDto } from './dto/create-unit-of-mesure.dto';
import { UpdateUnitOfMesureDto } from './dto/update-unit-of-mesure.dto';
import { PrismaService } from 'src/config/db/prisma.service';
export declare class UnitOfMesureService {
    private readonly unitOfMesure;
    constructor(prismaService: PrismaService);
    create(createUnitOfMesureDto: CreateUnitOfMesureDto): Promise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        id: bigint;
        creation_date: Date | null;
        name: string | null;
        abreviature: string | null;
    }>;
    findAll(): import("@prisma/client/runtime/library").PrismaPromise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        id: bigint;
        creation_date: Date | null;
        name: string | null;
        abreviature: string | null;
    }[]>;
    findOne(id: number): Promise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        id: bigint;
        creation_date: Date | null;
        name: string | null;
        abreviature: string | null;
    }>;
    update(id: number, updateUnitOfMesureDto: UpdateUnitOfMesureDto): Promise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        id: bigint;
        creation_date: Date | null;
        name: string | null;
        abreviature: string | null;
    }>;
    remove(id: number): Promise<boolean>;
    private getUnitOfMesure;
}
