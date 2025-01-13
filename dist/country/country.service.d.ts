import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { PrismaService } from 'src/config/db/prisma.service';
export declare class CountryService {
    private prismaService;
    private readonly country;
    constructor(prismaService: PrismaService);
    create(createCountryDto: CreateCountryDto): string;
    findAll(): import("@prisma/client/runtime/library").PrismaPromise<{
        status: import("@prisma/client").$Enums.Status | null;
        modification_date: Date | null;
        creation_user: string | null;
        modification_user: string | null;
        observation: string | null;
        creation_date: Date | null;
        id_pais: bigint;
        name: string | null;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateCountryDto: UpdateCountryDto): string;
    remove(id: number): string;
}
