import { PedidosService } from "./pedidos.service";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { Request } from "express";
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    criarPedidoSite(req: any, body: CreatePedidoDto): Promise<{
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
    criarPedido(req: any, body: CreatePedidoDto): Promise<{
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
    listarMeusPedidos(req: any): Promise<({
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
    listarTodos(req: Request): Promise<({
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
    enviarComprovante(id: number, file: Express.Multer.File, body: {
        nomeRecebedor: string;
        entregadorNome: string;
    }): Promise<{
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
    criarVendaCaixa(body: CreatePedidoDto, req: any): Promise<{
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
    buscarPorId(id: string, req: Request): Promise<{
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
    listar(req: any): Promise<({
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
}
