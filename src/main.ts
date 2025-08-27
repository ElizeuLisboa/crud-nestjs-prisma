import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as express from "express";
import { ValidationPipe } from "@nestjs/common";
import * as bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express";

async function bootstrap() {
  const app = await 
  NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: false, // desabilita parser global
  });

  // Middleware específico para webhook
  app.use("/pagamentos/webhook", express.raw({ type: "application/json" }));

  // Body parser normal para outras rotas
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.originalUrl === "/pagamentos/webhook") return next();
    express.json()(req, res, next);
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.originalUrl === "/pagamentos/webhook") return next();
    express.urlencoded({ extended: true })(req, res, next);
  });

  app.use("/uploads", express.static(join(process.cwd(), "uploads")));
  app.useStaticAssets(join(__dirname, "..", "uploads"), { prefix: "/uploads" });

  app.enableCors({ origin: "http://localhost:3000", credentials: true });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  await app.listen(4000);
  console.log("🚀 Servidor rodando em http://localhost:4000");
}
bootstrap();
