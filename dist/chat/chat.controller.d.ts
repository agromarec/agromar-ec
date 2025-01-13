import { Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dtos/create-chat.dto';
import { UserToken } from 'src/auth/guards';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createChat(client: Socket, user: UserToken, body: CreateChatDto): Promise<{
        message_ce: {
            creation_date: Date;
            creation_user: bigint;
            modification_date: Date | null;
            modification_user: string | null;
            observation: string | null;
            status: import("@prisma/client").$Enums.Status | null;
            id_message: bigint;
            text_message: string;
            shipping_date: Date | null;
            chat_usersEmisor_id: bigint;
            chat_usersReceptor_id: bigint;
        }[];
    } & {
        status: import("@prisma/client").$Enums.Status | null;
        emisor_id: bigint;
        receptor_id: bigint;
    }>;
    sendMessage(client: Socket, user: UserToken, receptorId: number): Promise<{
        id: bigint;
        isMe: boolean;
        message: string;
        createdAt: Date;
    }[]>;
}
