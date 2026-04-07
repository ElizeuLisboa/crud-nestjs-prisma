import { PrismaService } from "../prisma/prisma.service";
export declare class AuditoriaService {
    private prisma;
    constructor(prisma: PrismaService);
    criar(operadorId: number, autorizadoPor: number | null, empresaId: number, data: {
        acao: string;
        valor?: number;
        detalhes?: string;
        referenciaId?: number;
        dadosExtras?: any;
    }): Promise<{
        id: number;
        empresaId: number;
        createdAt: Date;
        valor: number | null;
        acao: string;
        detalhes: string | null;
        referenciaId: number | null;
        dadosExtras: import("@prisma/client/runtime/library").JsonValue | null;
        operadorId: number;
        autorizadoPor: number | null;
    }>;
}
