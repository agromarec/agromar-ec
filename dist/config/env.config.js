"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    PORT: zod_1.z.string().transform(Number).refine(port => !isNaN(port) || port > 8000, 'Puerto no válido'),
    PASSWORD_SALT: zod_1.z.string().default('10')
        .transform(Number).refine(salt => !isNaN(salt) || salt > 8000, 'Salt no válido'),
    JWT_SECRET: zod_1.z.string().min(2),
});
//# sourceMappingURL=env.config.js.map