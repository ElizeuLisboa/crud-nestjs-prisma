import { ClientesService } from "./clientes.service";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { AtualizarCadastroRapidoDto } from "./dto/atualizar-cadastro-rapido.dto";
import { CreateClientePublicoDto } from "./dto/create-cliente-publico.dto";
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    getPerfil(user: any): {
        perfil: any;
    };
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
    cadastroRapido(dto: CreateClienteDto): Promise<{
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
    atualizarCadastroRapido(cpf: string, body: AtualizarCadastroRapidoDto): Promise<{
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
    update(id: number, updateClienteDto: UpdateClienteDto, req: any): Promise<{
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
    autoCadastro(dto: CreateClientePublicoDto): Promise<{
        id: number;
        nome: string;
        email: string | null;
    }>;
}
