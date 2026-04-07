"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MercadoPagoService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoService = void 0;
const common_1 = require("@nestjs/common");
const mercadopago_1 = require("mercadopago");
const prisma_service_1 = require("../../prisma/prisma.service");
let MercadoPagoService = MercadoPagoService_1 = class MercadoPagoService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(MercadoPagoService_1.name);
        this.client = new mercadopago_1.MercadoPagoConfig({
            accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
        });
        this.payment = new mercadopago_1.Payment(this.client);
        this.preference = new mercadopago_1.Preference(this.client);
    }
    async buscarPagamentoPorId(paymentId) {
        try {
            return await this.payment.get({ id: paymentId });
        }
        catch (error) {
            this.logger.error(`Erro ao buscar pagamento MP ${paymentId}`, error?.message || error);
            return null;
        }
    }
    async criarCheckoutMercadoPago(pedido) {
        const FRONT_URL = process.env.FRONT_URL;
        const preference = {
            items: pedido.itens.map((item) => ({
                id: String(item.produtoId),
                title: item.produto.title,
                quantity: item.quantidade,
                unit_price: Number(item.valor),
                currency_id: "BRL",
            })),
            external_reference: String(pedido.id),
            back_urls: {
                success: `${FRONT_URL}/pagamento-sucesso`,
                failure: `${FRONT_URL}/erro-pagamento`,
                pending: `${FRONT_URL}/pagamento-pendente`,
            },
            notification_url: process.env.MP_WEBHOOK_URL,
        };
        return this.preference.create({ body: preference });
    }
    async pagarComCartao(payment) {
        const body = {
            transaction_amount: Number(payment.valor),
            token: payment.token,
            installments: Number(payment.installments),
            payment_method_id: payment.paymentMethodId,
            external_reference: String(payment.pedidoId),
            description: `Pedido #${payment.pedidoId}`,
            payer: {
                email: "cliente@email.com",
                identification: {
                    type: "CPF",
                    number: payment.payer.identification.number,
                },
            },
        };
        try {
            this.logger.log("Enviando pagamento para Mercado Pago");
            this.logger.debug(JSON.stringify(body, null, 2));
            const resultado = await this.payment.create({ body });
            this.logger.log("Resposta MP:");
            this.logger.debug(JSON.stringify(resultado, null, 2));
            return resultado;
        }
        catch (error) {
            this.logger.error("Erro Mercado Pago:", JSON.stringify(error, null, 2));
            throw new common_1.BadRequestException({
                message: "Erro ao processar pagamento no Mercado Pago",
                detalhe: error?.cause || error?.message,
            });
        }
    }
    async criarPagamentoPix({ valor, pedidoId }) {
        return this.payment.create({
            body: {
                transaction_amount: Number(valor),
                description: "Pagamento via PIX",
                payment_method_id: "pix",
                payer: {
                    email: "teste@teste.com",
                },
                external_reference: String(pedidoId),
                notification_url: process.env.MP_WEBHOOK_URL,
            },
        });
    }
};
exports.MercadoPagoService = MercadoPagoService;
exports.MercadoPagoService = MercadoPagoService = MercadoPagoService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MercadoPagoService);
//# sourceMappingURL=mercadopago.service.js.map