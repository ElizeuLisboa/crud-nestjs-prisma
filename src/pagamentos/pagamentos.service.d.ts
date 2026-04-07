import { PrismaService } from "../prisma/prisma.service";
import { MercadoPagoService } from "./mercadopago/mercadopago.service";
import { PagarMercadoPagoDto } from "./dto/pagar-mercadopago.dto";
export declare class PagamentosService {
    private readonly prisma;
    private readonly mercadoPagoService;
    private readonly logger;
    constructor(prisma: PrismaService, mercadoPagoService: MercadoPagoService);
    pagarComCartao(dto: PagarMercadoPagoDto): Promise<any>;
    criarPix(pedidoId: number, user: any): Promise<any>;
    processarWebhookMercadoPago(body: any): Promise<void>;
    criarCheckoutMercadoPago(pedidoId: number): Promise<any>;
    verificarStatusPix(txid: string): Promise<{
        status: string | undefined;
        pedidoId: number | undefined;
        valor: number | undefined;
    }>;
    processarWebhookMP(body: any): Promise<{
        ok: boolean;
    }>;
    confirmarPagamento(pagamentoId: number): Promise<{
        ok: boolean;
    }>;
    simularPixPago(txid: string): Promise<{
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
    private abrirGaveta;
}
