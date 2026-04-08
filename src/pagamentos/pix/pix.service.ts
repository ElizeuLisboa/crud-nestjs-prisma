import { Injectable, BadRequestException } from "@nestjs/common";
import { GerarPixDto } from "./dto/gerar.pix-dto";
import * as QRCode from "qrcode";

@Injectable()
export class PixService {
  private chave = process.env.PIX_CHAVE || "5511999999999";

  gerarPix(dto: GerarPixDto) {
    if (!dto) {
      throw new BadRequestException("DTO do PIX não recebido");
    }

    const { valor, descricao, nome } = dto;

    if (valor == null || isNaN(valor)) {
      throw new BadRequestException(`Valor inválido para PIX: ${valor}`);
    }

    const valorFormatado = valor.toFixed(2);

    const payload = [
      "000201",
      "010212",

      "26" +
        (4 + this.chave.length).toString().padStart(2, "0") +
        "0014BR.GOV.BCB.PIX" +
        this.chave.length.toString().padStart(2, "0") +
        this.chave,

      "52040000",
      "5303986",

      "54" + valorFormatado.length.toString().padStart(2, "0") + valorFormatado,

      "5802BR",

      "59" + (nome?.length || 0).toString().padStart(2, "0") + (nome || ""),

      "6010SAO PAULO",

      "62" +
        (descricao?.length || 0).toString().padStart(2, "0") +
        (descricao || ""),
    ].join(""); // ✅ ESSENCIAL

    const payloadComCRC = payload + "6304" + this.crc16(payload);

  

    // 👉 GERAR UM TXID SIMPLES
    const txid = `PIX-${Date.now()}`;

    return {
      codigo: payloadComCRC,
      txid,
    };
  }

  async gerarQrCodeBase64(payload: string): Promise<string> {
    return QRCode.toDataURL(payload, {
      margin: 2,
      scale: 6,
    });
  }

  private crc16(payload: string): string {
    let polinomio = 0x1021;
    let resultado = 0xffff;

    for (let i = 0; i < payload.length; i++) {
      resultado ^= payload.charCodeAt(i) << 8;

      for (let j = 0; j < 8; j++) {
        if ((resultado & 0x8000) !== 0) {
          resultado = (resultado << 1) ^ polinomio;
        } else {
          resultado <<= 1;
        }

        resultado &= 0xffff;
      }
    }

    return resultado.toString(16).toUpperCase().padStart(4, "0");
  }
}
