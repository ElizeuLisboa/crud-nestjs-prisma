import { Injectable } from "@nestjs/common";
import { v2 as cloudinary } from "cloudinary";

@Injectable()
export class UploadService {
  async uploadImagem(file: Express.Multer.File) {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "comprovantes",
    });

    return {
      fotoUrl: result.secure_url,
      cloudinaryId: result.public_id,
    };
  }

  async uploadDanfe(caminhoArquivo: string) {
    const result = await cloudinary.uploader.upload(caminhoArquivo, {
      folder: "danfes",
      resource_type: "raw",
    });

    return {
      arquivoUrl: result.secure_url,
      cloudinaryId: result.public_id,
    };
  }
}
