"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function listRoutes() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.init();
    const httpAdapter = app.getHttpAdapter();
    const instance = httpAdapter.getInstance();
    if (instance?._router?.stack) {
        console.log("📌 Rotas registradas:");
        instance._router.stack.forEach((layer) => {
            if (layer.route) {
                const path = layer.route.path;
                const methods = Object.keys(layer.route.methods)
                    .map((m) => m.toUpperCase())
                    .join(", ");
                console.log(`➡️ ${methods} ${path}`);
            }
        });
    }
    else {
        console.warn("⚠️ Nenhuma rota encontrada.");
    }
    await app.close();
}
listRoutes().catch((err) => console.error("Erro ao listar rotas:", err));
//# sourceMappingURL=list-routes.js.map