import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from 'src/config/db/prisma.service';
import { UserToken } from 'src/auth/guards';
export declare class RequestsService {
    private readonly user_requests;
    constructor(prismaService: PrismaService);
    create(user: UserToken, createRequestDto: CreateRequestDto): Promise<{
        status: import("@prisma/client").$Enums.Status | null;
        description: string;
        creation_date: Date | null;
        user_id: bigint;
        image: string | null;
        id_user_request: number;
        title: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRequestDto: UpdateRequestDto): string;
    remove(id: number): string;
}
