import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as express from 'express';

import { RolesGuard } from './auth/roles.guard';
import { Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));


  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads',
  });

  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true,
  });

  await app.listen(4000);


}
bootstrap();
