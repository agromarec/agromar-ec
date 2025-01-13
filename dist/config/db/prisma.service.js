"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = exports.serializeData = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../prisma");
const INGNORED_FIELDS = ['modification_date', 'creation_user', 'modification_user', 'observation'];
const serializeData = (data) => {
    return JSON.parse(JSON.stringify(data, (key, value) => {
        if (typeof value === 'bigint') {
            return Number(value);
        }
        else if (INGNORED_FIELDS.includes(key)) {
            return undefined;
        }
        return value;
    }));
};
exports.serializeData = serializeData;
function extendPrismaClient() {
    const logger = new common_1.Logger('Prisma');
    const prisma = new prisma_1.PrismaClient();
    return prisma.$extends({
        client: {
            async onModuleInit() {
                await prisma_1.Prisma.getExtensionContext(this).$connect();
                logger.log('Database in connected 🚀');
            },
            async enableShutdownHooks(app) {
                prisma_1.Prisma.getExtensionContext(prisma).$on('beforeExit', async () => {
                    await app.close();
                });
            }
        },
        model: {
            $allModels: {
                async softDelete({ where }) {
                    const context = prisma_1.Prisma.getExtensionContext(this);
                    const result = await context.update({
                        where,
                        data: { status: prisma_1.Status.Eliminado }
                    });
                    return result;
                },
            },
        },
        query: {
            $allModels: {
                $allOperations: async ({ args, query }) => {
                    const result = await query(args);
                    return (0, exports.serializeData)(result);
                },
                findFirst({ args, query }) {
                    args.where = {
                        ...args.where,
                        status: prisma_1.Status.Activo
                    };
                    return query(args);
                },
                findMany({ args, query }) {
                    args.where = {
                        ...args.where,
                        status: prisma_1.Status.Activo
                    };
                    return query(args);
                },
                findFirstOrThrow({ args, query }) {
                    args.where = {
                        ...args.where,
                        status: prisma_1.Status.Activo
                    };
                    return query(args);
                },
                findUnique({ args, query }) {
                    args.where = {
                        ...args.where,
                        status: prisma_1.Status.Activo
                    };
                    return query(args);
                },
                findUniqueOrThrow({ args, query }) {
                    args.where = {
                        ...args.where,
                        status: prisma_1.Status.Activo
                    };
                    return query(args);
                },
            }
        }
    });
}
const ExtendedPrismaClient = class {
    constructor() {
        return extendPrismaClient();
    }
};
let PrismaService = class PrismaService extends ExtendedPrismaClient {
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);
//# sourceMappingURL=prisma.service.js.map