
import { Injectable } from "@nestjs/common";
import cloudinary from "./cloudinary.config";

// 🔥 TIPAGEM DO RETORNO
type CloudinaryUploadResponse = {
  secure_url: string;
  public_id: string;
};

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<CloudinaryUploadResponse> {
    return new Promise<CloudinaryUploadResponse>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "produtos/doces",
        },
        (error: any, result: any) => {
          if (error) return reject(error);

          resolve({
            secure_url: result.secure_url,
            public_id: result.public_id,
          });
        },
      ).end(file.buffer);
    });
  }
}