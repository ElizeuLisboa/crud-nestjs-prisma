import { PrismaService } from "../../prisma/prisma.service";
import { PagarMercadoPagoDto } from "../dto/pagar-mercadopago.dto";
export declare class MercadoPagoService {
    private readonly prisma;
    private readonly logger;
    private client;
    private payment;
    private preference;
    constructor(prisma: PrismaService);
    buscarPagamentoPorId(paymentId: string): Promise<any>;
    criarCheckoutMercadoPago(pedido: any): Promise<any>;
    pagarComCartao(payment: PagarMercadoPagoDto): Promise<any>;
    criarPagamentoPix({ valor, pedidoId }: any): Promise<any>;
}
