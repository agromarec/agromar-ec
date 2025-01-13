import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
export declare class ProvinceController {
    private readonly provinceService;
    constructor(provinceService: ProvinceService);
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
    findOne(id: string): string;
    update(id: string, updateProvinceDto: UpdateProvinceDto): string;
    remove(id: string): string;
}
