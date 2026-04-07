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
exports.FretesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FretesService = class FretesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async calcularFrete(cepDestino, peso) {
        const fretes = await this.prisma.frete.findMany({
            include: { transportadora: true },
        });
        const validos = fretes.filter((f) => peso >= f.pesoMin && peso <= f.pesoMax);
        return validos.map((f) => ({
            transportadora: f.transportadora?.nome || null,
            valor: f.valor,
            prazoEntrega: f.prazoEntrega ?? 5,
        }));
    }
};
exports.FretesService = FretesService;
exports.FretesService = FretesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FretesService);
//# sourceMappingURL=fretes.service.js.map