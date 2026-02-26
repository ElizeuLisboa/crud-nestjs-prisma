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

@Controller("comprovantes")
export class ComprovanteController {
  constructor(private readonly comprovanteService: ComprovanteService) {}

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadComprovante(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any
  ) {
    const { pedidoId, nomeRecebedor, entregadorNome } = body;

    console.log("📦 Dados recebidos:", {
      pedidoId,
      nomeRecebedor,
      entregadorNome,
    });

    const fotoUrl = file?.path || "";
    const cloudinaryId = "comprovantes/" + file?.filename;

    return this.comprovanteService.salvarComprovante({
      pedidoId: Number(pedidoId),
      nomeRecebedor,
      entregadorNome,
      fotoUrl,
      cloudinaryId,
    });
  }
}
