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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DashboardService = class DashboardService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getVendasPorProduto() {
        const itens = await this.prisma.itemPedido.groupBy({
            by: ['produtoId'],
            _sum: { valor: true },
            _count: { id: true },
        });
        const resultados = await Promise.all(itens.map(async (item) => {
            const produto = await this.prisma.produto.findUnique({
                where: { id: item.produtoId },
            });
            return {
                produto: produto?.title || 'Produto Desconhecido',
                vendas: Number(item._sum.valor) || 0,
                qtdPedidos: item._count.id,
            };
        }));
        return resultados;
    }
    async getPedidosPorStatus() {
        const pedidos = await this.prisma.pedido.groupBy({
            by: ['status'],
            _count: { id: true },
        });
        return pedidos.map((p) => ({
            status: p.status,
            quantidade: p._count.id,
        }));
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map