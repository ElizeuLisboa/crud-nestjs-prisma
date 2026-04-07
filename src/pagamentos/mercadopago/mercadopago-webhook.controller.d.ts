import { PagamentosService } from "../pagamentos.service";
import { MercadoPagoWebhookService } from "../mercadopago/mercadopago-webhook.service";
export declare class MercadoPagoWebhookController {
    private readonly pagamentosService;
    private readonly webhookService;
    constructor(pagamentosService: PagamentosService, webhookService: MercadoPagoWebhookService);
    receber(signature: string, req: any, body: any): Promise<{
        ok: boolean;
    }>;
}
