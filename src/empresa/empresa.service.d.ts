import { PrismaService } from "../prisma/prisma.service";
export declare class EmpresaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
        id: number;
        nome: string;
        telefone: string;
        cnpj: string;
        endereco: string;
        ativa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        ativa: boolean;
    }[]>;
    delete(id: number): Promise<{
        id: number;
        nome: string;
        telefone: string;
        cnpj: string;
        endereco: string;
        ativa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    toggle(id: number, ativa: boolean): Promise<{
        id: number;
        nome: string;
        telefone: string;
        cnpj: string;
        endereco: string;
        ativa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, data: any): Promise<{
        id: number;
        nome: string;
        telefone: string;
        cnpj: string;
        endereco: string;
        ativa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
