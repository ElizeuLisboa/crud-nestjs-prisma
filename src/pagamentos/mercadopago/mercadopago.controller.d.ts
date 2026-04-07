import { PagamentosService } from "../pagamentos.service";
export declare class MercadoPagoController {
    private readonly pagamentosService;
    constructor(pagamentosService: PagamentosService);
    criarCheckout(pedidoId: number): Promise<any>;
}
