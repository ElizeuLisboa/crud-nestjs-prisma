import { AuditoriaService } from "./auditoria.service";
import { CreateAuditoriaDto } from "./dto/create-sangria.dto";
import { Request } from "express";
export declare class AuditoriaController {
    private auditoriaService;
    constructor(auditoriaService: AuditoriaService);
    registrar(operadorId: number, autorizadoPor: number, dto: CreateAuditoriaDto, req: Request): Promise<{
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
