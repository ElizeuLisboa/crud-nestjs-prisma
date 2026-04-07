import { PrismaService } from "../prisma/prisma.service";
export declare class TransportadoraService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
        id: number;
        nome: string;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string;
        empresaId: number;
        cnpj: string;
        fretePadrao: number | null;
        bairro: string | null;
        tipoVeiculo: string | null;
        numero: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string;
        empresaId: number;
        cnpj: string;
        fretePadrao: number | null;
        bairro: string | null;
        tipoVeiculo: string | null;
        numero: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string;
        empresaId: number;
        cnpj: string;
        fretePadrao: number | null;
        bairro: string | null;
        tipoVeiculo: string | null;
        numero: string | null;
    } | null>;
    update(id: number, data: {
        nome?: string;
        cnpj?: string;
        telefone?: string;
    }): Promise<{
        id: number;
        nome: string;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string;
        empresaId: number;
        cnpj: string;
        fretePadrao: number | null;
        bairro: string | null;
        tipoVeiculo: string | null;
        numero: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        nome: string;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string;
        empresaId: number;
        cnpj: string;
        fretePadrao: number | null;
        bairro: string | null;
        tipoVeiculo: string | null;
        numero: string | null;
    }>;
}
