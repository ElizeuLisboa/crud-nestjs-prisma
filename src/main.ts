import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { json } from "express";
import { ValidationPipe } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(
    json({
      verify: (req: any, res, buffer) => {
        req.rawBody = buffer;
      },
    }),
  );

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

    app.enableCors({
    origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://www.usealtara.com.br",
    ],
    credentials: true,
  });

  // const port = process.env.PORT || 4000;
  // console.log(`Servidor rodando na porta ${port}`);
  await app.listen(4000);
}

bootstrap();
