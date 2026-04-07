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
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PedidosService = class PedidosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async gerarNumeroPedido(tx) {
        const seq = await tx.sequencia.update({
            where: { id: 1 },
            data: { proximoNumero: { increment: 1 } },
        });
        const numero = String(seq.proximoNumero).padStart(6, "0");
        return `PDV-${numero}`;
    }
    async gerarNumeroPedidoSite(tx) {
        const seq = await tx.sequencia.update({
            where: { id: 1 },
            data: { proximoNumero: { increment: 1 } },
        });
        const numero = String(seq.proximoNumero).padStart(6, "0");
        return `PEDS-${numero}`;
    }
    async create(data, user) {
        try {
            console.log("🧠 USER NO CREATE:", user);
            console.log("🧠 DATA RECEBIDA:", data);
            if (!user?.id) {
                throw new common_1.UnauthorizedException("Usuário não identificado");
            }
            const empresaId = user.empresaId;
            const produtoIds = data.itens.map((item) => item.produtoId);
            console.log("🧠 PRODUTO IDS:", produtoIds);
            const produtos = await this.prisma.produto.findMany({
                where: {
                    id: { in: produtoIds },
                    empresaId: user.empresaId,
                },
            });
            console.log("🧠 PRODUTOS ENCONTRADOS:", produtos);
            if (produtos.length !== produtoIds.length) {
                throw new common_1.BadRequestException("Um ou mais produtos não existem");
            }
            const produtosMap = new Map(produtos.map((p) => [p.id, p]));
            const valorTotal = Number(data.itens
                .reduce((total, item) => {
                const produto = produtosMap.get(item.produtoId);
                if (!produto) {
                    throw new common_1.BadRequestException(`Produto ${item.produtoId} não encontrado`);
                }
                const valor = Number(item.preco ?? produto.price);
                return total + valor * item.quantidade;
            }, 0)
                .toFixed(2));
            console.log("🧠 VALOR TOTAL:", valorTotal);
            return await this.prisma.$transaction(async (tx) => {
                const numeroPedido = await this.gerarNumeroPedidoSite(tx);
                console.log("🧠 NUMERO PEDIDO:", numeroPedido);
                const pedido = await tx.pedido.create({
                    data: {
                        numeroPedido,
                        empresaId,
                        clienteId: user.id,
                        valorTotal,
                        status: "PENDENTE",
                        itens: {
                            create: data.itens.map((item) => {
                                const produto = produtosMap.get(item.produtoId);
                                if (!produto) {
                                    throw new common_1.BadRequestException(`Produto ${item.produtoId} não encontrado`);
                                }
                                const valorUnitario = Number(item.preco ?? produto.price);
                                return {
                                    empresaId,
                                    produtoId: item.produtoId,
                                    quantidade: item.quantidade,
                                    valor: valorUnitario,
                                };
                            }),
                        },
                    },
                    include: {
                        cliente: true,
                        itens: { include: { produto: true } },
                    },
                });
                console.log("✅ PEDIDO CRIADO:", pedido);
                return pedido;
            });
        }
        catch (error) {
            console.log("💥 ERRO REAL NO CREATE:", error);
            throw error;
        }
    }
    async findAll(user) {
        return this.prisma.pedido.findMany({
            where: {
                empresaId: user.empresaId,
            },
            include: {
                cliente: true,
                itens: { include: { produto: true } },
            },
        });
    }
    async findByCliente(clienteId, user) {
        return this.prisma.pedido.findMany({
            where: {
                clienteId,
                empresaId: user.empresaId,
                status: { not: "CANCELADO" },
            },
            include: {
                cliente: true,
                itens: { include: { produto: true } },
            },
            orderBy: { createdAt: "desc" },
        });
    }
    async listarTodos(user) {
        return this.prisma.pedido.findMany({
            where: {
                empresaId: user.empresaId,
            },
            include: {
                cliente: true,
                itens: { include: { produto: true } },
            },
            orderBy: { createdAt: "desc" },
        });
    }
    async confirmarEntrega(pedidoId, nomeRecebedor, entregadorNome, file) {
        const pedido = await this.prisma.pedido.findUnique({
            where: { id: pedidoId },
        });
        if (!pedido) {
            throw new common_1.NotFoundException(`Pedido ${pedidoId} não encontrado`);
        }
        if (!file) {
            throw new common_1.BadRequestException("Arquivo de comprovante não enviado");
        }
        const fotoUrl = `/uploads/${file.filename}`;
        const existing = await this.prisma.comprovanteEntrega.findUnique({
            where: { pedidoId },
        });
        let comprovante;
        if (existing) {
            comprovante = await this.prisma.comprovanteEntrega.update({
                where: { pedidoId },
                data: {
                    nomeRecebedor,
                    entregadorNome,
                    fotoUrl,
                },
            });
        }
        else {
            comprovante = await this.prisma.comprovanteEntrega.create({
                data: {
                    pedidoId,
                    empresaId: pedido.empresaId,
                    nomeRecebedor,
                    entregadorNome,
                    fotoUrl,
                },
            });
        }
        const pedidoAtualizado = await this.prisma.pedido.update({
            where: { id: pedidoId },
            data: {
                status: "ENTREGUE",
                entregue: true,
            },
        });
        return {
            message: `Pedido #${pedido.numeroPedido} entregue com sucesso`,
            pedido: pedidoAtualizado,
            comprovante,
        };
    }
    async criarVendaCaixa(data, user) {
        if (!user?.id) {
            throw new common_1.UnauthorizedException("Usuário não identificado");
        }
        const empresaId = user.empresaId;
        const produtoIds = data.itens.map((item) => item.produtoId);
        const produtos = await this.prisma.produto.findMany({
            where: { id: { in: produtoIds } },
        });
        const produtosMap = new Map(produtos.map((p) => [p.id, p]));
        const valorTotal = data.itens.reduce((total, item) => {
            const produto = produtosMap.get(item.produtoId);
            return total + (produto?.price ?? 0) * item.quantidade;
        }, 0);
        return this.prisma.$transaction(async (tx) => {
            const numeroPedido = await this.gerarNumeroPedido(tx);
            return tx.pedido.create({
                data: {
                    numeroPedido,
                    empresaId,
                    clienteId: user.id,
                    valorTotal,
                    status: "PAGO",
                    itens: {
                        create: data.itens.map((item) => {
                            const produto = produtosMap.get(item.produtoId);
                            return {
                                empresaId,
                                produtoId: item.produtoId,
                                quantidade: item.quantidade,
                                valor: (produto?.price ?? 0) * item.quantidade,
                            };
                        }),
                    },
                },
                include: {
                    cliente: true,
                    itens: { include: { produto: true } },
                },
            });
        });
    }
    async buscarPorId(id, user) {
        const pedido = await this.prisma.pedido.findFirst({
            where: {
                id,
                empresaId: user.empresaId,
            },
            include: {
                itens: {
                    include: { produto: true },
                },
            },
        });
        if (!pedido) {
            throw new common_1.NotFoundException("Pedido não encontrado");
        }
        return pedido;
    }
};
exports.PedidosService = PedidosService;
exports.PedidosService = PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PedidosService);
//# sourceMappingURL=pedidos.service.js.map