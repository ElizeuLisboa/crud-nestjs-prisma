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
exports.ComprovanteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ComprovanteService = class ComprovanteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async salvarComprovante(dados) {
        const pedido = await this.prisma.pedido.findUnique({
            where: { id: dados.pedidoId },
        });
        if (!pedido || !pedido.empresaId) {
            throw new common_1.NotFoundException("Pedido não encontrado");
        }
        const comprovante = await this.prisma.comprovanteEntrega.upsert({
            where: { pedidoId: dados.pedidoId },
            update: {
                nomeRecebedor: dados.nomeRecebedor ?? "Não Informado",
                entregadorNome: dados.entregadorNome ?? "Não Informado",
                fotoUrl: dados.fotoUrl,
                cloudinaryId: dados.cloudinaryId,
                createdAt: new Date(),
            },
            create: {
                pedidoId: dados.pedidoId,
                numeroPedido: pedido?.numeroPedido,
                nomeRecebedor: dados.nomeRecebedor ?? "Não Informado",
                entregadorNome: dados.entregadorNome ?? "Não Informado",
                fotoUrl: dados.fotoUrl,
                cloudinaryId: dados.cloudinaryId,
                empresaId: pedido.empresaId,
            },
        });
        console.log("✅ Comprovante criado:", comprovante);
        await this.prisma.pedido.update({
            where: { id: dados.pedidoId },
            data: {
                status: "ENTREGUE",
                entregue: true,
                updatedAt: new Date(),
            },
        });
        console.log(`📦 Pedido ${pedido.id} atualizado para ENTREGUE.`);
        return comprovante;
    }
};
exports.ComprovanteService = ComprovanteService;
exports.ComprovanteService = ComprovanteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComprovanteService);
//# sourceMappingURL=comprovante.service.js.map