import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module"; // caminho relativo
import { NestExpressApplication } from "@nestjs/platform-express";

async function listRoutes() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.init();

  const httpAdapter = app.getHttpAdapter() as any;
  const instance = httpAdapter.getInstance();

  if (instance?._router?.stack) {
    console.log("📌 Rotas registradas:");
    instance._router.stack.forEach((layer: any) => {
      if (layer.route) {
        const path = layer.route.path;
        const methods = Object.keys(layer.route.methods)
          .map((m) => m.toUpperCase())
          .join(", ");
        console.log(`➡️ ${methods} ${path}`);
      }
    });
  } else {
    console.warn("⚠️ Nenhuma rota encontrada.");
  }

  await app.close();
}

listRoutes().catch((err) => console.error("Erro ao listar rotas:", err));
