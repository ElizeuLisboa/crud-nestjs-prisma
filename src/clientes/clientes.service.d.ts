import { PrismaService } from "../prisma/prisma.service";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import { CreateClientePublicoDto } from "./dto/create-cliente-publico.dto";
export declare class ClientesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        email: string | null;
        password: string;
        id: number;
        cpf: string | null;
        nome: string;
        role: import(".prisma/client").$Enums.Role;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string | null;
        empresaId: number;
    }[]>;
    findOne(id: number): Promise<{
        email: string | null;
        password: string;
        id: number;
        cpf: string | null;
        nome: string;
        role: import(".prisma/client").$Enums.Role;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string | null;
        empresaId: number;
    }>;
    update(id: number, data: UpdateClienteDto): Promise<{
        email: string | null;
        password: string;
        id: number;
        cpf: string | null;
        nome: string;
        role: import(".prisma/client").$Enums.Role;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string | null;
        empresaId: number;
    }>;
    remove(id: number): Promise<{
        email: string | null;
        password: string;
        id: number;
        cpf: string | null;
        nome: string;
        role: import(".prisma/client").$Enums.Role;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string | null;
        empresaId: number;
    }>;
    buscarPorCpf(cpf: string): Promise<{
        email: string | null;
        password: string;
        id: number;
        cpf: string | null;
        nome: string;
        role: import(".prisma/client").$Enums.Role;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string | null;
        empresaId: number;
    } | null>;
    cadastroRapido(data: {
        nome: string;
        email: string;
        cpf: string;
        telefone: string;
    }): Promise<{
        email: string | null;
        password: string;
        id: number;
        cpf: string | null;
        nome: string;
        role: import(".prisma/client").$Enums.Role;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string | null;
        empresaId: number;
    }>;
    atualizarCadastroRapido(cpf: string, data: any): Promise<{
        email: string | null;
        password: string;
        id: number;
        cpf: string | null;
        nome: string;
        role: import(".prisma/client").$Enums.Role;
        cep: string | null;
        logradouro: string | null;
        cidade: string | null;
        estado: string | null;
        telefone: string | null;
        empresaId: number;
    }>;
    autoCadastro(dto: CreateClientePublicoDto): Promise<{
        id: number;
        nome: string;
        email: string | null;
    }>;
}
