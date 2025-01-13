"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const auth_service_1 = require("../auth/auth.service");
const prisma_service_1 = require("../config/db/prisma.service");
let ChatService = class ChatService {
    constructor(authService, prisma) {
        this.authService = authService;
        this.user = prisma.user_ce;
        this.chatUser = prisma.chat_users;
        this.chatMessage = prisma.message_ce;
    }
    async createChat(emisorId, receptorId) {
        if (emisorId === receptorId)
            throw new common_1.BadRequestException('Emisor y receptor no pueden ser el mismo');
        const receptor = await this.authService.findById(receptorId);
        const existChat = await this.chatUser.findUnique({
            where: {
                emisor_id_receptor_id: {
                    emisor_id: emisorId,
                    receptor_id: receptor.id,
                }
            },
            include: { message_ce: true },
        });
        if (existChat)
            return existChat;
        const chatUser = await this.chatUser.create({
            data: {
                emisor: { connect: { id: emisorId } },
                receptor: { connect: { id: receptor.id } },
            },
            include: { message_ce: true },
        });
        return chatUser;
    }
    async registerWebSocketClient(wsClient, userId) {
        const user = await this.authService.findById(userId);
        console.log({ wsId: wsClient.id });
        await this.user.update({
            where: { id: user.id },
            data: { isOnline: true },
        });
        wsClient.join(user.id.toString());
        const usersFromChatMessage = await this.chatUser.findMany({
            select: { receptor_id: true },
            where: {
                emisor_id: user.id,
                AND: [
                    { receptor: { status: 'Activo' } }
                ]
            }
        });
        const usersFromChatMessage2 = await this.chatUser.findMany({
            select: { emisor_id: true },
            where: {
                receptor_id: user.id,
                AND: [
                    { emisor: { status: 'Activo' } }
                ]
            }
        });
        const chatUserIds = new Set([usersFromChatMessage2.map(user => user.emisor_id), usersFromChatMessage.map(user => user.receptor_id)].flat());
        const chatUsers = await this.user.findMany({ where: { id: { in: Array.from(chatUserIds) } }, select: { id: true, name: true, lastName: true, phone: true, isOnline: true } });
        wsClient.emit('load-chat-users', chatUsers);
        chatUsers.filter(chatUser => chatUser.isOnline).forEach(({ id }) => {
            wsClient.to(id.toString()).emit('conection', {
                userId: user.id,
                isOnline: true,
            });
        });
    }
    async unregisterWebSocketClient(wsClient, userId) {
        wsClient.leave(userId.toString());
        await this.user.update({
            where: { id: userId, status: 'Activo' },
            data: { isOnline: false },
        });
        const usersFromChatMessage = await this.chatUser.findMany({
            select: { receptor_id: true },
            where: {
                emisor_id: userId,
                AND: [
                    { receptor: { status: 'Activo' } }
                ]
            }
        });
        const usersFromChatMessage2 = await this.chatUser.findMany({
            select: { emisor_id: true },
            where: {
                receptor_id: userId,
                AND: [
                    { emisor: { status: 'Activo' } }
                ]
            }
        });
        const chatUserIds = new Set([usersFromChatMessage2.map(user => user.emisor_id), usersFromChatMessage.map(user => user.receptor_id)].flat());
        chatUserIds.forEach((chatUserId) => {
            wsClient.to(chatUserId.toString()).emit('conection', {
                userId,
                isOnline: false,
            });
        });
    }
    async getChatMessages(client, { emisorId, receptorId }) {
        console.log({ client: client.id });
        const chatUser = await Promise.any([
            this.chatUser.findUniqueOrThrow({
                where: {
                    emisor_id_receptor_id: {
                        emisor_id: emisorId,
                        receptor_id: receptorId,
                    },
                    status: client_1.Status.Activo,
                },
                include: { message_ce: { orderBy: { creation_date: 'desc' } } },
            }),
            this.chatUser.findUniqueOrThrow({
                where: {
                    emisor_id_receptor_id: {
                        emisor_id: receptorId,
                        receptor_id: emisorId,
                    },
                    status: client_1.Status.Activo,
                },
                include: { message_ce: { orderBy: { creation_date: 'desc' } } },
            }),
        ]);
        if (!chatUser)
            throw new common_1.BadRequestException('No existe el chat');
        return chatUser.message_ce.map(message => ({
            id: message.id_message,
            isMe: Number(message.creation_user) === emisorId,
            message: message.text_message,
            createdAt: message.creation_date,
        }));
    }
    async sendMessage(client, { from, to, message }) {
        const fromUser = await this.authService.findById(from);
        const toUser = await this.authService.findById(to);
        const chatUser = await Promise.any([
            this.chatUser.findUniqueOrThrow({
                where: {
                    emisor_id_receptor_id: {
                        emisor_id: from,
                        receptor_id: to,
                    },
                    status: client_1.Status.Activo,
                },
                include: { message_ce: true },
            }),
            this.chatUser.findUniqueOrThrow({
                where: {
                    emisor_id_receptor_id: {
                        emisor_id: to,
                        receptor_id: from,
                    },
                    status: client_1.Status.Activo,
                },
                include: { message_ce: true },
            }),
        ]);
        if (!chatUser)
            throw new common_1.BadRequestException('No existe el chat');
        await this.chatMessage.create({
            data: {
                text_message: message,
                chat_users: {
                    connect: {
                        emisor_id_receptor_id: {
                            emisor_id: chatUser.emisor_id,
                            receptor_id: chatUser.receptor_id,
                        }
                    }
                },
                creation_date: new Date(),
                creation_user: fromUser.id,
            }
        });
        client.to(to.toString()).emit('personal-message', {
            from: fromUser.id,
            to: toUser.id,
            message: message,
            date: new Date(),
        });
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        prisma_service_1.PrismaService])
], ChatService);
//# sourceMappingURL=chat.service.js.map