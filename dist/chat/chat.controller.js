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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chat_service_1 = require("./chat.service");
const decorators_1 = require("../auth/decorators");
const get_user_decorator_1 = require("../auth/decorators/get-user.decorator");
const create_chat_dto_1 = require("./dtos/create-chat.dto");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    createChat(client, user, body) {
        console.log({ client: client.id });
        return this.chatService.createChat(Number(user.id), body.emisorId);
    }
    sendMessage(client, user, receptorId) {
        return this.chatService.getChatMessages(client, { emisorId: Number(user.id), receptorId });
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)('create-chat'),
    (0, decorators_1.Auth)(),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object, create_chat_dto_1.CreateChatDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createChat", null);
__decorate([
    (0, common_1.Get)('messages/:receptorId'),
    (0, decorators_1.Auth)(),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __param(2, (0, common_1.Param)('receptorId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object, Number]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "sendMessage", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map