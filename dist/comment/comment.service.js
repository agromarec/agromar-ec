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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../config/db/prisma.service");
const client_1 = require("@prisma/client");
let CommentService = class CommentService {
    constructor(prismaService) {
        this.comment = prismaService.comment_ce;
    }
    create(user, createCommentDto) {
        return this.comment.create({
            data: {
                comentario: createCommentDto.comentario,
                rating: createCommentDto.rating,
                creation_user: user.name,
                creation_date: new Date(),
                user_ce: { connect: { id: user.id } },
                product: { connect: { id: createCommentDto.product_id } },
            }
        });
    }
    findAll(productId) {
        return this.comment.findMany({ where: { product_id: productId, status: client_1.Status.Activo }, include: { user_ce: { select: { name: true, lastName: true } } }, orderBy: { creation_date: 'desc' } });
    }
    remove(id) {
        return this.comment.delete({ where: { id_comment: id } });
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentService);
//# sourceMappingURL=comment.service.js.map