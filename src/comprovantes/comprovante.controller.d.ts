import { ComprovanteService } from "./comprovante.service";
export declare class ComprovanteController {
    private readonly comprovanteService;
    constructor(comprovanteService: ComprovanteService);
    uploadComprovante(file: Express.Multer.File, body: any): Promise<{
        id: number;
        empresaId: number;
        createdAt: Date;
        cloudinaryId: string | null;
        fotoUrl: string;
        numeroPedido: string | null;
        pedidoId: number;
        nomeRecebedor: string | null;
        entregadorNome: string;
    }>;
}
