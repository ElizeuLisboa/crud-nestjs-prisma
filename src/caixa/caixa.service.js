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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaixaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const pix_service_1 = require("../pagamentos/pix/pix.service");
let CaixaService = class CaixaService {
    constructor(prisma, pixService) {
        this.prisma = prisma;
        this.pixService = pixService;
    }
    async finalizarVenda(data, usuario) {
        console.log("USUARIO JWT:", usuario);
        const empresaId = usuario?.empresaId;
        console.log("📦 DATA RECEBIDA:", data);
        console.log("👤 USUARIO:", usuario);
        if (!empresaId) {
            throw new common_1.BadRequestException("empresaId não encontrado no usuário");
        }
        const { clienteId, itens, metodoPagamento, parcelas = 1, valorTotal, } = data;
        if (!itens?.length) {
            throw new common_1.BadRequestException("Nenhum item informado");
        }
        const ids = itens.map((i) => i.produtoId ?? i.id).filter(Boolean);
        if (!ids.length) {
            throw new common_1.BadRequestException("Itens sem produtoId válido");
        }
        const produtos = await this.prisma.produto.findMany({
            where: { id: { in: ids } },
        });
        for (const i of itens) {
            const id = i.produtoId ?? i.id;
            const produto = produtos.find((p) => p.id === id);
            if (!produto) {
                throw new common_1.BadRequestException(`Produto ${id} não encontrado`);
            }
            if (produto.estoque < i.quantidade) {
                throw new common_1.BadRequestException(`Estoque insuficiente para ${produto.title}`);
            }
        }
        const totalCalculado = itens.reduce((acc, i) => {
            const id = i.produtoId ?? i.id;
            const produto = produtos.find((p) => p.id === id);
            return acc + produto.price * i.quantidade;
        }, 0);
        return this.prisma.$transaction(async (tx) => {
            const seq = await tx.sequencia.update({
                where: { id: 1 },
                data: { proximoNumero: { increment: 1 } },
            });
            let clienteValido = null;
            if (clienteId) {
                const existe = await tx.cliente.findUnique({
                    where: { id: clienteId },
                });
                clienteValido = existe ? clienteId : null;
            }
            const numeroPedido = `PDV-${String(seq.proximoNumero).padStart(6, "0")}`;
            const pedido = await tx.pedido.create({
                data: {
                    numeroPedido,
                    empresa: {
                        connect: { id: empresaId },
                    },
                    cliente: clienteValido
                        ? { connect: { id: clienteValido } }
                        : undefined,
                    valorTotal: valorTotal ?? totalCalculado,
                    status: "AGUARDANDO_PAGAMENTO",
                    metodoPagamento: metodoPagamento,
                    itens: {
                        create: itens.map((i) => {
                            const id = i.produtoId ?? i.id;
                            const produto = produtos.find((p) => p.id === id);
                            return {
                                empresaId,
                                clienteId: clienteValido ?? undefined,
                                produtoId: id,
                                quantidade: i.quantidade,
                                valor: produto.price,
                                descricao: produto.title ?? produto.description ?? "Produto",
                                valorUnitario: produto.price,
                            };
                        }),
                    },
                },
                include: {
                    cliente: true,
                    itens: { include: { produto: true } },
                },
            });
            for (const i of itens) {
                const id = i.produtoId ?? i.id;
                await tx.produto.update({
                    where: { id },
                    data: {
                        estoque: {
                            decrement: i.quantidade,
                        },
                    },
                });
            }
            if (!metodoPagamento) {
                throw new common_1.BadRequestException("Metodo de pagamento não informado");
            }
            const pagamento = await tx.pagamento.create({
                data: {
                    pedidoId: pedido.id,
                    clienteId: clienteValido ?? undefined,
                    forma: metodoPagamento,
                    valor: valorTotal ?? totalCalculado,
                    status: metodoPagamento === "PIX" ? "PENDENTE" : "PAGO",
                    parcelas: metodoPagamento === "CREDITO" ? parcelas : 1,
                    empresaId,
                },
            });
            console.log("METODO RECEBIDO:", metodoPagamento);
            let dadosPix = null;
            if (metodoPagamento === "PIX") {
                const pixGerado = this.pixService.gerarPix({
                    pedidoId: pedido.id,
                    valor: Number(valorTotal ?? totalCalculado),
                    descricao: `Pedido ${pedido.id}`,
                    nome: clienteValido ? "CLIENTE IDENTIFICADO" : "CLIENTE PDV",
                });
                const qrBase64 = await this.pixService.gerarQrCodeBase64(pixGerado.codigo);
                await tx.pagamento.update({
                    where: { id: pagamento.id },
                    data: {
                        pixCodigo: pixGerado.codigo,
                        pixTxid: pixGerado.txid,
                        pixQrCodeBase64: qrBase64,
                        pixStatus: "GERADO",
                    },
                });
                dadosPix = {
                    pixCodigo: pixGerado.codigo,
                    pixQrCodeBase64: qrBase64,
                    pixTxid: pixGerado.txid,
                };
                await tx.pagamento.update({
                    where: { id: pagamento.id },
                    data: { status: "PAGO", pixStatus: "CONFIRMADO" },
                });
                await tx.pedido.update({
                    where: { id: pedido.id },
                    data: { status: "FINALIZADO" },
                });
            }
            if (metodoPagamento !== "PIX") {
                await tx.pedido.update({
                    where: { id: pedido.id },
                    data: { status: "FINALIZADO" },
                });
            }
            const pedidoCompleto = await tx.pedido.findUnique({
                where: { id: pedido.id },
                include: {
                    itens: {
                        include: { produto: true },
                    },
                },
            });
            const empresa = await tx.empresa.findFirst();
            return {
                ...pedidoCompleto,
                empresa,
                dadosPix,
            };
        });
    }
    addMeses(data, meses) {
        const d = new Date(data);
        d.setMonth(d.getMonth() + meses);
        return d;
    }
};
exports.CaixaService = CaixaService;
exports.CaixaService = CaixaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pix_service_1.PixService])
], CaixaService);
//# sourceMappingURL=caixa.service.js.map