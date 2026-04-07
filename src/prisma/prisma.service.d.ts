import { OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private empresaIdAtual;
    constructor();
    setEmpresaId(empresaId: number): void;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    aplicarFiltroEmpresa<T>(args: any): Promise<T>;
}
