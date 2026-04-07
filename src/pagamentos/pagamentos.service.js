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
var PagamentosService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const mercadopago_service_1 = require("./mercadopago/mercadopago.service");
let PagamentosService = PagamentosService_1 = class PagamentosService {
    constructor(prisma, mercadoPagoService) {
        this.prisma = prisma;
        this.mercadoPagoService = mercadoPagoService;
        this.logger = new common_1.Logger(PagamentosService_1.name);
    }
    async pagarComCartao(dto) {
        if (process.env.MODO_PDVMVP === "true") {
            await this.prisma.pedido.update({
                where: { id: dto.pedidoId },
                data: {
                    status: "PAGO",
                    metodoPagamento: "MERCADOPAGO",
                },
            });
            return {
                status: "approved",
                id: "SIMULADO",
                transaction_amount: dto.valor,
            };
        }
        return this.mercadoPagoService.pagarComCartao(dto);
    }
    async criarPix(pedidoId, user) {
        console.log("🧠 PEDIDO ID PIX:", pedidoId);
        if (!pedidoId || isNaN(pedidoId)) {
            throw new Error("pedidoId inválido");
        }
        const pedido = await this.prisma.pedido.findFirst({
            where: {
                id: pedidoId,
                empresaId: user.empresaId,
            },
        });
        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }
        console.log("🧠 PEDIDO ENCONTRADO:", pedido);
        await this.prisma.pagamento.create({
            data: {
                pedidoId,
                valor: pedido.valorTotal,
                forma: "PIX",
                status: "PAGO",
                empresaId: pedido.empresaId,
            },
        });
        await this.prisma.pedido.update({
            where: { id: pedidoId },
            data: {
                status: "PAGO",
                metodoPagamento: "PIX",
            },
        });
        const pagamento = await this.mercadoPagoService.criarPagamentoPix({
            valor: pedido.valorTotal,
            pedidoId: pedido.id,
        });
        return pagamento;
    }
    async processarWebhookMercadoPago(body) {
        if (body.type !== "payment")
            return;
        const paymentId = body.data?.id;
        if (!paymentId)
            return;
        const payment = await this.mercadoPagoService.buscarPagamentoPorId(paymentId.toString());
        if (!payment?.id) {
            this.logger.warn("Pagamento inválido", payment);
            return;
        }
        const mpId = payment.id.toString();
        const pedidoId = Number(payment?.external_reference);
        if (!pedidoId)
            return;
        await this.prisma.$transaction(async (tx) => {
            const pedido = await tx.pedido.findUnique({
                where: { id: pedidoId },
            });
            if (!pedido || !pedido.empresaId)
                return;
            const existente = await tx.pagamento.findFirst({
                where: { codigoExterno: mpId },
            });
            if (!existente) {
                await tx.pagamento.create({
                    data: {
                        pedidoId,
                        forma: "MERCADOPAGO",
                        valor: Number(payment?.transaction_amount),
                        status: payment?.status === "approved" ? "PAGO" : "PENDENTE",
                        parcelas: payment?.installments ?? 1,
                        descricao: "Pagamento Mercado Pago (webhook)",
                        codigoExterno: mpId,
                        empresaId: pedido?.empresaId,
                    },
                });
            }
            else {
                await tx.pagamento.update({
                    where: { id: existente.id },
                    data: {
                        status: payment?.status === "approved" ? "PAGO" : "PENDENTE",
                    },
                });
            }
            if (payment.status === "approved") {
                await tx.pedido.update({
                    where: { id: pedidoId },
                    data: {
                        status: "PAGO",
                        metodoPagamento: "MERCADOPAGO",
                    },
                });
            }
        });
    }
    async criarCheckoutMercadoPago(pedidoId) {
        const pedido = await this.prisma.pedido.findUnique({
            where: { id: pedidoId },
            include: {
                itens: {
                    include: {
                        produto: true,
                    },
                },
            },
        });
        if (!pedido) {
            throw new common_1.BadRequestException("Pedido não encontrado");
        }
        if (pedido.status !== "PENDENTE" &&
            pedido.status !== "AGUARDANDO_PAGAMENTO") {
            throw new common_1.BadRequestException("Pedido inválido");
        }
        if (!pedido.itens || pedido.itens.length === 0) {
            throw new common_1.BadRequestException("Pedido sem itens");
        }
        return this.mercadoPagoService.criarCheckoutMercadoPago(pedido);
    }
    async verificarStatusPix(txid) {
        const pagamento = await this.prisma.pagamento.findFirst({
            where: { pixTxid: txid },
        });
        if (!pagamento) {
            throw new common_1.NotFoundException("Pagamento não encontrado");
        }
        if (pagamento.status !== "PAGO") {
            await this.simularPixPago(txid);
        }
        const atualizado = await this.prisma.pagamento.findFirst({
            where: { pixTxid: txid },
        });
        return {
            status: atualizado?.status,
            pedidoId: atualizado?.pedidoId,
            valor: atualizado?.valor,
        };
    }
    async processarWebhookMP(body) {
        console.log("📩 WEBHOOK RECEBIDO:", body);
        const paymentId = body?.data?.id;
        if (!paymentId) {
            console.log("⚠️ Sem paymentId");
            return { ok: true };
        }
        const pagamentoMP = await this.mercadoPagoService.buscarPagamentoPorId(paymentId);
        console.log("💰 PAGAMENTO MP:", pagamentoMP?.status);
        if (!pagamentoMP)
            return { ok: true };
        const pedidoId = Number(pagamentoMP.external_reference);
        if (!pedidoId) {
            console.log("⚠️ Sem external_reference");
            return { ok: true };
        }
        if (pagamentoMP.status === "approved") {
            console.log("✅ PAGAMENTO APROVADO");
            await this.prisma.pedido.update({
                where: { id: pedidoId },
                data: {
                    status: "PAGO",
                    metodoPagamento: "PIX",
                },
            });
        }
        return { ok: true };
    }
    async confirmarPagamento(pagamentoId) {
        return this.prisma.$transaction(async (tx) => {
            const pagamento = await tx.pagamento.findUnique({
                where: { id: pagamentoId },
                include: {
                    pedido: {
                        include: { itens: true },
                    },
                },
            });
            if (!pagamento) {
                throw new common_1.BadRequestException("Pagamento não encontrado");
            }
            await tx.pagamento.update({
                where: { id: pagamentoId },
                data: {
                    status: "PAGO",
                    pixStatus: "PAGO",
                },
            });
            await tx.pedido.update({
                where: { id: pagamento.pedidoId },
                data: {
                    status: "PAGO",
                },
            });
            for (const item of pagamento.pedido.itens) {
                await tx.produto.update({
                    where: {
                        id: item.produtoId,
                        empresaId: pagamento.pedido.empresaId,
                    },
                    data: {
                        estoque: {
                            decrement: item.quantidade,
                        },
                    },
                });
            }
            return { ok: true };
        });
    }
    async simularPixPago(txid) {
        return this.prisma.$transaction(async (tx) => {
            const pagamento = await tx.pagamento.findFirst({
                where: { pixTxid: txid },
                include: {
                    pedido: {
                        include: { itens: true },
                    },
                },
            });
            if (!pagamento) {
                throw new common_1.BadRequestException("Pagamento não encontrado");
            }
            await tx.pagamento.update({
                where: { id: pagamento.id },
                data: {
                    status: "PAGO",
                    pixStatus: "PAGO",
                },
            });
            await tx.pedido.update({
                where: { id: pagamento.pedidoId },
                data: {
                    status: "FINALIZADO",
                },
            });
            for (const item of pagamento.pedido.itens) {
                await tx.produto.update({
                    where: { id: item.produtoId },
                    data: {
                        estoque: { decrement: item.quantidade },
                    },
                });
            }
            this.abrirGaveta();
            return {
                ok: true,
                pedido: pagamento.pedido,
            };
        });
    }
    abrirGaveta() {
        console.log("🔓 GAVETA ABERTA (SIMULADO)");
    }
};
exports.PagamentosService = PagamentosService;
exports.PagamentosService = PagamentosService = PagamentosService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mercadopago_service_1.MercadoPagoService])
], PagamentosService);
//# sourceMappingURL=pagamentos.service.js.map