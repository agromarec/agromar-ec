import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { UserToken } from 'src/auth/guards';
export declare class RequestsController {
    private readonly requestsService;
    constructor(requestsService: RequestsService);
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
    findOne(id: string): string;
    update(id: string, updateRequestDto: UpdateRequestDto): string;
    remove(id: string): string;
}
