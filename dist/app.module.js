"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const env_config_1 = require("./config/env.config");
const canton_module_1 = require("./canton/canton.module");
const auth_module_1 = require("./auth/auth.module");
const role_module_1 = require("./role/role.module");
const prisma_module_1 = require("./config/db/prisma.module");
const comment_module_1 = require("./comment/comment.module");
const product_module_1 = require("./product/product.module");
const unit_of_mesure_module_1 = require("./unit-of-mesure/unit-of-mesure.module");
const product_category_module_1 = require("./product-category/product-category.module");
const predefined_product_module_1 = require("./predefined-product/predefined-product.module");
const file_module_1 = require("./file/file.module");
const country_module_1 = require("./country/country.module");
const province_module_1 = require("./province/province.module");
const quantity_module_1 = require("./quantity/quantity.module");
const cart_module_1 = require("./cart/cart.module");
const chat_module_1 = require("./chat/chat.module");
const order_module_1 = require("./order/order.module");
const requests_module_1 = require("./requests/requests.module");
const seed_module_1 = require("./seed/seed.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                load: [() => env_config_1.envSchema.safeParse(process.env)],
                validate: (config) => {
                    const parsed = env_config_1.envSchema.safeParse(config);
                    if (!parsed.success) {
                        throw new Error(`Validation error: ${parsed.error.message}`);
                    }
                    return parsed.data;
                },
            }),
            prisma_module_1.PrismaModule,
            canton_module_1.CantonModule,
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            comment_module_1.CommentModule,
            product_module_1.ProductModule,
            unit_of_mesure_module_1.UnitOfMesureModule,
            product_category_module_1.ProductCategoryModule,
            predefined_product_module_1.PredefinedProductModule,
            file_module_1.FileModule,
            country_module_1.CountryModule,
            province_module_1.ProvinceModule,
            quantity_module_1.QuantityModule,
            cart_module_1.CartModule,
            chat_module_1.ChatModule,
            order_module_1.OrderModule,
            requests_module_1.RequestsModule,
            seed_module_1.SeedModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map