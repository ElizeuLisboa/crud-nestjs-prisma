"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_1 = require("express");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, express_1.json)({
        verify: (req, res, buffer) => {
            req.rawBody = buffer;
        },
    }));
    app.enableCors({
        origin: ["http://localhost:3000",
            "https://pdv-frontend-1xyf.onrender.com"],
        credentials: true,
    });
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    const port = process.env.PORT || 4000;
    console.log(`Servidor rodando na porta ${port}`);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map