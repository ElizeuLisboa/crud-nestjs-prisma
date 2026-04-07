import { TransportadoraService } from "./transportadora.service";
import { CreateTransportadoraDto } from "./dto/create-transportadora.dto";
export declare class TransportadoraController {
    private service;
    constructor(service: TransportadoraService);
    create(body: CreateTransportadoraDto): Promise<{
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
}
