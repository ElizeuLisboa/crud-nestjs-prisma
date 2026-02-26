import { Module } from "@nestjs/common";
import { PixController } from "./pix.controller";
import { PixService } from "./pix.service";

@Module({
  providers: [PixService],
  controllers: [PixController],
  exports: [PixService],   // 👈 ESSENCIAL
})

export class PixModule {}
