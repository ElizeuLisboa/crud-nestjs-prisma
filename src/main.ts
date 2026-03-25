import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { json, urlencoded } from "express";
import { Request, Response, NextFunction } from "express";
import { ValidationPipe } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import cookieParser = require("cookie-parser");
import { join } from "path";
import * as bodyParser from "body-parser";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(
    json({
      verify: (req: any, res, buffer) => {
        req.rawBody = buffer;
      },
    }),
  );

  app.enableCors({
    origin: ["http://localhost:3000",
             "https://pdv-frontend-1xyf.onrender.com"],
    credentials: true,
  });

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const port = process.env.PORT || 4000;
  console.log(`Servidor rodando na porta ${port}`);
  await app.listen(port);

  // await app.listen(4000);
}

bootstrap();
