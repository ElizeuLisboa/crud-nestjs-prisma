import { EmpresaService } from "./empresa.service";
export declare class EmpresaController {
    private empresaService;
    constructor(empresaService: EmpresaService);
    criar(data: any): Promise<{
        id: number;
        nome: string;
        telefone: string;
        cnpj: string;
        endereco: string;
        ativa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    listar(): Promise<{
        id: number;
        nome: string;
        ativa: boolean;
    }[]>;
    remove(id: string): Promise<{
        id: number;
        nome: string;
        telefone: string;
        cnpj: string;
        endereco: string;
        ativa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    toggle(id: string, ativa: boolean): Promise<{
        id: number;
        nome: string;
        telefone: string;
        cnpj: string;
        endereco: string;
        ativa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: any): Promise<{
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
