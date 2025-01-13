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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../config/db/prisma.service");
const config_1 = require("@nestjs/config");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
const roles_enum_1 = require("./enums/roles.enum");
let AuthService = class AuthService {
    constructor(configService, jwtService, prisma) {
        this.configService = configService;
        this.jwtService = jwtService;
        this.user = prisma.user_ce;
    }
    async createUser(createUserDto) {
        const user = await this.user.findUnique({ where: { email: createUserDto.email } });
        if (user)
            throw new common_1.BadRequestException('Usuario ya existe');
        createUserDto.password = await (0, bcrypt_1.hash)(createUserDto.password, this.configService.get('PASSWORD_SALT'));
        return await this.user.create({
            include: { user_role: { include: { role_ce: { where: { status: client_1.Status.Activo } } } } },
            data: {
                email: createUserDto.email,
                password: createUserDto.password,
                name: createUserDto.name,
                lastName: createUserDto.lastName,
                phone: createUserDto.phone,
                address: createUserDto.address,
                creation_date: new Date(),
                creation_user: 'system',
                pais_ce: { connect: { id_pais: createUserDto.paisId, } },
                canton_ce: { connect: { id: createUserDto.cantonId, } },
                user_role: {
                    createMany: {
                        data: createUserDto.roles.map(roleId => ({ roleId }))
                    }
                }
            },
        });
    }
    async registerUser(createUserDto) {
        const user = await this.user.findUnique({ where: { email: createUserDto.email } });
        if (user)
            throw new common_1.BadRequestException('Usuario ya existe');
        createUserDto.password = await (0, bcrypt_1.hash)(createUserDto.password, this.configService.get('PASSWORD_SALT'));
        const allowedRoles = [roles_enum_1.Role.Comprador, roles_enum_1.Role.Vendedor];
        const newUser = await this.user.create({
            include: { user_role: { include: { role_ce: { where: { status: client_1.Status.Activo } } } }, pais_ce: true },
            data: {
                email: createUserDto.email,
                password: createUserDto.password,
                name: createUserDto.name,
                lastName: createUserDto.lastName,
                phone: createUserDto.phone,
                address: createUserDto.address,
                creation_date: new Date(),
                creation_user: 'system',
                pais_ce: { connect: { id_pais: createUserDto.paisId, } },
                canton_ce: { connect: { id: createUserDto.cantonId, } },
                user_role: {
                    createMany: {
                        data: allowedRoles.map(roleId => ({ roleId }))
                    }
                }
            },
        });
        delete newUser.password;
        return {
            ...newUser,
            token: this.getJwtToken({ id: Number(newUser.id) })
        };
    }
    async login(loginUserDto) {
        const user = await this.findByEmail(loginUserDto.email);
        const password = (0, bcrypt_1.compareSync)(loginUserDto.password, user.password);
        if (!password)
            throw new common_1.UnauthorizedException('Credenciales incorrectas');
        delete user.password;
        return {
            ...user,
            token: this.getJwtToken({ id: Number(user.id) })
        };
    }
    async checkToken(user) {
        delete user.password;
        return {
            ...user,
            token: this.getJwtToken({ id: Number(user.id) })
        };
    }
    getJwtToken(payload) {
        const token = this.jwtService.sign(payload);
        return token;
    }
    async findAll(currentUser) {
        const users = await this.user.findMany({
            where: { id: { not: currentUser.id } },
            include: {
                user_role: {
                    select: {
                        roleId: true,
                    },
                },
                canton_ce: {
                    include: {
                        province_ce: true,
                    }
                }
            },
            orderBy: {
                creation_date: 'desc',
            }
        });
        users.forEach(user => delete user.password);
        return users;
    }
    async findById(id) {
        const user = await this.user.findUnique({
            where: { id },
            include: {
                user_role: {
                    include: { role_ce: true }
                }
            }
        });
        if (!user)
            throw new common_1.NotFoundException('No se encontro el usuario');
        return user;
    }
    async findByEmail(email) {
        const user = await this.user.findUnique({
            where: { email: email },
            include: {
                user_role: {
                    include: { role_ce: { where: { status: client_1.Status.Activo } } }
                },
                pais_ce: true
            }
        });
        if (!user)
            throw new common_1.NotFoundException('No se encontro el usuario');
        return user;
    }
    async update(id, updateAuthDto) {
        const oldUser = await this.findById(id);
        return this.user.update({
            where: { id },
            data: {
                name: updateAuthDto.name ?? oldUser.name,
                lastName: updateAuthDto.lastName ?? oldUser.lastName,
                phone: updateAuthDto.phone ?? oldUser.phone,
                paypalEmail: updateAuthDto.paypalEmail ?? oldUser.paypalEmail,
                address: updateAuthDto.address ?? oldUser.address,
                pais_ce: { connect: { id_pais: updateAuthDto.paisId ?? oldUser.paisId, } },
                canton_ce: { connect: { id: updateAuthDto.cantonId ?? oldUser.cantonId, } },
            },
        });
    }
    async updatePassword(user, updateAuthDto) {
        const isValidPassword = (0, bcrypt_1.compareSync)(updateAuthDto.oldPassword, user.password);
        if (!isValidPassword)
            throw new common_1.UnauthorizedException('Contraseña incorrecta');
        const newPassword = await (0, bcrypt_1.hash)(updateAuthDto.password, this.configService.get('PASSWORD_SALT'));
        await this.user.update({
            where: { id: user.id },
            data: {
                password: newPassword,
            }
        });
        return { message: 'Contraseña actualizada' };
    }
    async updatePaymentMethods(user, updatePaymentMethodsDto) {
        if (updatePaymentMethodsDto.allowBankTransfers && !updatePaymentMethodsDto.bankTransfersInfo.trim()) {
            throw new common_1.BadRequestException('Debe ingresar información de transferencia bancaria');
        }
        return this.user.update({
            where: { id: user.id },
            data: {
                allowPaypalPayments: updatePaymentMethodsDto.allowPaypalPayments,
                allowBankTransfers: updatePaymentMethodsDto.allowBankTransfers,
                bankTransfersInfo: updatePaymentMethodsDto.bankTransfersInfo,
            }
        });
    }
    async updateSellerDescription(userId, description) {
        const user = await this.findById(userId);
        return this.user.update({
            where: { id: user.id },
            data: {
                businessDescription: description,
            }
        });
    }
    async remove(id) {
        const user = await this.findById(id);
        return this.user.softDelete({ where: { id: user.id } });
    }
    async findUsersByType(type, currentUserId, filterUserDto) {
        if (!Object.values(client_1.UserType).includes(type))
            throw new common_1.BadRequestException('Tipo de usuario no valido');
        const { page = 1, size = 10, search = '' } = filterUserDto;
        const data = await this.user.findMany({
            select: { id: true, name: true, lastName: true, email: true, phone: true, address: true, pais_ce: true, businessDescription: true, product: true },
            where: {
                user_role: { none: { role_ce: { id_role: roles_enum_1.Role.Admin } } },
                userType: type, id: { not: currentUserId },
                OR: [
                    { name: { contains: search, mode: 'insensitive' } },
                    { lastName: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                    { phone: { contains: search, mode: 'insensitive' } },
                    { address: { contains: search, mode: 'insensitive' } },
                    { pais_ce: { name: { contains: search, mode: 'insensitive' } } },
                    { product: { some: { description: { contains: search, mode: 'insensitive' } } } },
                    { product: { some: { predefinedProduct: { name: { contains: search, mode: 'insensitive' } } } } },
                    { product: { some: { predefinedProduct: { category: { name: { contains: search, mode: 'insensitive' } } } } } },
                ]
            },
            skip: (page - 1) * size,
            take: size,
            orderBy: {
                creation_date: 'desc',
            }
        });
        const hasMore = data.length === size;
        return {
            data,
            hasMore,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map