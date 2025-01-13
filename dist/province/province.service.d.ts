import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { PrismaService } from 'src/config/db/prisma.service';
export declare class ProvinceService {
    private readonly province;
    constructor(prismaService: PrismaService);
    create(createProvinceDto: CreateProvinceDto): string;
    findAll(): import("@prisma/client/runtime/library").PrismaPromise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        creation_date: Date | null;
        name: string | null;
        id_province: bigint;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateProvinceDto: UpdateProvinceDto): string;
    remove(id: number): string;
}
