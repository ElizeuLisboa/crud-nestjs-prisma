import { PrismaService } from "../prisma/prisma.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
export declare class PedidosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private gerarNumeroPedido;
    private gerarNumeroPedidoSite;
    create(data: CreatePedidoDto, user: any): Promise<{
        cliente: {
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
        } | null;
        itens: ({
            produto: {
                id: number;
                empresaId: number;
                createdAt: Date;
                title: string;
                description: string;
                price: number;
                image: string;
                estoque: number;
                codigoBarras: string | null;
                cloudinaryId: string | null;
                fotoUrl: string | null;
                categoriaId: number | null;
            };
        } & {
            id: number;
            empresaId: number;
            produtoId: number;
            quantidade: number;
            valor: number | null;
            descricao: string | null;
            valorUnitario: number | null;
            pedidoId: number;
        })[];
    } & {
        id: number;
        empresaId: number;
        createdAt: Date;
        updatedAt: Date;
        numeroPedido: string;
        valorTotal: number;
        status: string;
        origem: string;
        entregue: boolean;
        metodoPagamento: string;
        clienteId: number | null;
        caixaId: number | null;
    }>;
    findAll(user: any): Promise<({
        cliente: {
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
        } | null;
        itens: ({
            produto: {
                id: number;
                empresaId: number;
                createdAt: Date;
                title: string;
                description: string;
                price: number;
                image: string;
                estoque: number;
                codigoBarras: string | null;
                cloudinaryId: string | null;
                fotoUrl: string | null;
                categoriaId: number | null;
            };
        } & {
            id: number;
            empresaId: number;
            produtoId: number;
            quantidade: number;
            valor: number | null;
            descricao: string | null;
            valorUnitario: number | null;
            pedidoId: number;
        })[];
    } & {
        id: number;
        empresaId: number;
        createdAt: Date;
        updatedAt: Date;
        numeroPedido: string;
        valorTotal: number;
        status: string;
        origem: string;
        entregue: boolean;
        metodoPagamento: string;
        clienteId: number | null;
        caixaId: number | null;
    })[]>;
    findByCliente(clienteId: number, user: any): Promise<({
        cliente: {
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
        } | null;
        itens: ({
            produto: {
                id: number;
                empresaId: number;
                createdAt: Date;
                title: string;
                description: string;
                price: number;
                image: string;
                estoque: number;
                codigoBarras: string | null;
                cloudinaryId: string | null;
                fotoUrl: string | null;
                categoriaId: number | null;
            };
        } & {
            id: number;
            empresaId: number;
            produtoId: number;
            quantidade: number;
            valor: number | null;
            descricao: string | null;
            valorUnitario: number | null;
            pedidoId: number;
        })[];
    } & {
        id: number;
        empresaId: number;
        createdAt: Date;
        updatedAt: Date;
        numeroPedido: string;
        valorTotal: number;
        status: string;
        origem: string;
        entregue: boolean;
        metodoPagamento: string;
        clienteId: number | null;
        caixaId: number | null;
    })[]>;
    listarTodos(user: any): Promise<({
        cliente: {
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
        } | null;
        itens: ({
            produto: {
                id: number;
                empresaId: number;
                createdAt: Date;
                title: string;
                description: string;
                price: number;
                image: string;
                estoque: number;
                codigoBarras: string | null;
                cloudinaryId: string | null;
                fotoUrl: string | null;
                categoriaId: number | null;
            };
        } & {
            id: number;
            empresaId: number;
            produtoId: number;
            quantidade: number;
            valor: number | null;
            descricao: string | null;
            valorUnitario: number | null;
            pedidoId: number;
        })[];
    } & {
        id: number;
        empresaId: number;
        createdAt: Date;
        updatedAt: Date;
        numeroPedido: string;
        valorTotal: number;
        status: string;
        origem: string;
        entregue: boolean;
        metodoPagamento: string;
        clienteId: number | null;
        caixaId: number | null;
    })[]>;
    confirmarEntrega(pedidoId: number, nomeRecebedor: string, entregadorNome: string, file: Express.Multer.File): Promise<{
        message: string;
        pedido: {
            id: number;
            empresaId: number;
            createdAt: Date;
            updatedAt: Date;
            numeroPedido: string;
            valorTotal: number;
            status: string;
            origem: string;
            entregue: boolean;
            metodoPagamento: string;
            clienteId: number | null;
            caixaId: number | null;
        };
        comprovante: {
            id: number;
            empresaId: number;
            createdAt: Date;
            cloudinaryId: string | null;
            fotoUrl: string;
            numeroPedido: string | null;
            pedidoId: number;
            nomeRecebedor: string | null;
            entregadorNome: string;
        };
    }>;
    criarVendaCaixa(data: CreatePedidoDto, user: any): Promise<{
        cliente: {
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
        } | null;
        itens: ({
            produto: {
                id: number;
                empresaId: number;
                createdAt: Date;
                title: string;
                description: string;
                price: number;
                image: string;
                estoque: number;
                codigoBarras: string | null;
                cloudinaryId: string | null;
                fotoUrl: string | null;
                categoriaId: number | null;
            };
        } & {
            id: number;
            empresaId: number;
            produtoId: number;
            quantidade: number;
            valor: number | null;
            descricao: string | null;
            valorUnitario: number | null;
            pedidoId: number;
        })[];
    } & {
        id: number;
        empresaId: number;
        createdAt: Date;
        updatedAt: Date;
        numeroPedido: string;
        valorTotal: number;
        status: string;
        origem: string;
        entregue: boolean;
        metodoPagamento: string;
        clienteId: number | null;
        caixaId: number | null;
    }>;
    buscarPorId(id: number, user: any): Promise<{
        itens: ({
            produto: {
                id: number;
                empresaId: number;
                createdAt: Date;
                title: string;
                description: string;
                price: number;
                image: string;
                estoque: number;
                codigoBarras: string | null;
                cloudinaryId: string | null;
                fotoUrl: string | null;
                categoriaId: number | null;
            };
        } & {
            id: number;
            empresaId: number;
            produtoId: number;
            quantidade: number;
            valor: number | null;
            descricao: string | null;
            valorUnitario: number | null;
            pedidoId: number;
        })[];
    } & {
        id: number;
        empresaId: number;
        createdAt: Date;
        updatedAt: Date;
        numeroPedido: string;
        valorTotal: number;
        status: string;
        origem: string;
        entregue: boolean;
        metodoPagamento: string;
        clienteId: number | null;
        caixaId: number | null;
    }>;
}
