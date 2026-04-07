import { PixService } from "./pix.service";
import { GerarPixDto } from "./dto/gerar.pix-dto";
export declare class PixController {
    private readonly pixService;
    constructor(pixService: PixService);
    gerar(dto: GerarPixDto): Promise<{
        codigo: string;
        txid: string;
        qrCodeBase64: string;
    }>;
}
