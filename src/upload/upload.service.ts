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
}