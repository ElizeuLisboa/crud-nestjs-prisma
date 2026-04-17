import { Module } from "@nestjs/common";
import { UploadService } from "./upload.service";

@Module({
  providers: [UploadService],
  exports: [UploadService], // 🔥 ESSENCIAL
})
export class UploadModule {}