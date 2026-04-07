import { PrismaService } from "../prisma/prisma.service";
export declare class ComprovanteService {
    private prisma;
    constructor(prisma: PrismaService);
    salvarComprovante(dados: {
        pedidoId: number;
        nomeRecebedor: string;
        entregadorNome: string;
        fotoUrl: string;
        cloudinaryId: string;
    }): Promise<{
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
