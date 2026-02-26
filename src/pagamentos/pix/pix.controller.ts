import { Body, Controller, Post } from "@nestjs/common";
import { PixService } from "./pix.service";
import { GerarPixDto } from "./dto/gerar.pix-dto";

@Controller("pagamentos/pix")
export class PixController {
  constructor(private readonly pixService: PixService) {}

  @Post("gerar")
  async gerar(@Body() dto: GerarPixDto) {
    const pix = this.pixService.gerarPix(dto);

    const qrCodeBase64 = await this.pixService.gerarQrCodeBase64(pix.codigo); // 👈 USAR .codigo


    return {
      codigo: pix.codigo,
      txid: pix.txid,
      qrCodeBase64,
    };

  }
}
