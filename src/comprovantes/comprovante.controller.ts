import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  BadRequestException,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { memoryStorage } from "multer";
import { ComprovanteService } from "./comprovante.service";
import { Express } from "express";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

@Controller("comprovantes")
export class ComprovanteController {
  constructor(private readonly comprovanteService: ComprovanteService) {}

  @Post("upload")
  // @UseInterceptors(FileInterceptor("file"))
  @UseInterceptors(
    FileInterceptor("imagem", {
      storage: memoryStorage(),
    }),
  )
  async uploadComprovante(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ) {
    const { pedidoId, nomeRecebedor, entregadorNome } = body;

    console.log("📦 Dados recebidos:", {
      pedidoId,
      nomeRecebedor,
      entregadorNome,
    });

    console.log("Cloudinary:", {
      cloud: process.env.CLOUDINARY_CLOUD_NAME,
      key: process.env.CLOUDINARY_API_KEY,
    });

    const streamUpload = (file: Express.Multer.File) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "comprovantes" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          },
        );

        Readable.from(file.buffer).pipe(stream);
      });
    };

    const uploadResult: any = await streamUpload(file);

    const fotoUrl = uploadResult.secure_url;
    const cloudinaryId = uploadResult.public_id;

    return this.comprovanteService.salvarComprovante({
      pedidoId: Number(pedidoId),
      nomeRecebedor,
      entregadorNome,
      fotoUrl,
      cloudinaryId,
    });
  }
}
