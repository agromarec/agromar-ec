import { UnitOfMesureService } from './unit-of-mesure.service';
import { CreateUnitOfMesureDto } from './dto/create-unit-of-mesure.dto';
import { UpdateUnitOfMesureDto } from './dto/update-unit-of-mesure.dto';
export declare class UnitOfMesureController {
    private readonly unitOfMesureService;
    constructor(unitOfMesureService: UnitOfMesureService);
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
    remove(id: string): Promise<boolean>;
}
