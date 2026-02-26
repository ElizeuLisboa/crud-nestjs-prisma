import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { ComprovanteController } from "./comprovante.controller";
import { ComprovanteService } from "./comprovante.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [
    PrismaModule,
    MulterModule.register({
      storage: diskStorage({
        destination: "./uploads/comprovantes", // 🔥 garante pasta local
        filename: (req, file, cb) => {
          // 🔥 cria nome único e seguro para o arquivo
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          const ext = extname(file.originalname) || ".jpg";
          cb(null, `${uniqueSuffix}${ext}`);
        },
      }),
    }),
  ],
  controllers: [ComprovanteController],
  providers: [ComprovanteService],
})
export class ComprovanteModule {}
