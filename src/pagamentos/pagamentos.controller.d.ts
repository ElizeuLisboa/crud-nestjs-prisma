import { PagamentosService } from "./pagamentos.service";
import { PrismaService } from "../prisma/prisma.service";
export declare class PagamentosController {
    private readonly prisma;
    private readonly pagamentosService;
    constructor(prisma: PrismaService, pagamentosService: PagamentosService);
    webhook(body: any): Promise<{
        ok: boolean;
    }>;
    statusPix(txid: string): Promise<{
        status: string | undefined;
        pedidoId: number | undefined;
        valor: number | undefined;
    }>;
    simularPix(txid: string): Promise<{
        ok: boolean;
        pedido: {
            itens: {
                id: number;
                empresaId: number;
                produtoId: number;
                quantidade: number;
                valor: number | null;
                descricao: string | null;
                valorUnitario: number | null;
                pedidoId: number;
            }[];
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
        };
    }>;
    checkout(pedidoId: number): Promise<any>;
    pagarMercadoPago(dto: any): Promise<any>;
    criarPix(pedidoId: number, req: any): Promise<any>;
}
