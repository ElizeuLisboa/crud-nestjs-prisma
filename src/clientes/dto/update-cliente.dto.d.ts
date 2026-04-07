import { Role } from "@prisma/client";
export declare class UpdateClienteDto {
    nome?: string;
    email?: string;
    cpf?: string | null;
    password?: string;
    role?: Role;
    logradouro?: string;
    cidade?: string;
    estado?: string;
    telefone?: string;
    cep?: string;
}
