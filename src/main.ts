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
    })
  );

  app.enableCors({
    origin: process.env.FRONT_URL,
    credentials: true,
  });

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    })
  );

  const port = process.env.PORT || 4000;
  await app.listen(port);
  // await app.listen(4000);
}

bootstrap();
