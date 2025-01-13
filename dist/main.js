"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
        credentials: true,
        allowedHeaders: 'Content-Type, Authorization, Content-Length, X-Requested-With',
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const port = process.env.PORT || 3001;
    await app.listen(port);
    common_1.Logger.log(`Server running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map