import { Socket } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/config/db/prisma.service';
export declare class ChatService {
    private readonly authService;
    private readonly user;
    private readonly chatMessage;
    private readonly chatUser;
    constructor(authService: AuthService, prisma: PrismaService);
    createChat(emisorId: number, receptorId: number): Promise<{
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
    registerWebSocketClient(wsClient: Socket, userId: number): Promise<void>;
    unregisterWebSocketClient(wsClient: Socket, userId: number): Promise<void>;
    getChatMessages(client: Socket, { emisorId, receptorId }: {
        emisorId: number;
        receptorId: number;
    }): Promise<{
        id: bigint;
        isMe: boolean;
        message: string;
        createdAt: Date;
    }[]>;
    sendMessage(client: Socket, { from, to, message }: {
        from: number;
        to: number;
        message: string;
    }): Promise<void>;
}
