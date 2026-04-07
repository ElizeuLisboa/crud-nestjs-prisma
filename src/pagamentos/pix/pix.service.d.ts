import { GerarPixDto } from "./dto/gerar.pix-dto";
export declare class PixService {
    private chave;
    gerarPix(dto: GerarPixDto): {
        codigo: string;
        txid: string;
    };
    gerarQrCodeBase64(payload: string): Promise<string>;
    private crc16;
}
