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
exports.TransportadoraService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TransportadoraService = class TransportadoraService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.transportadora.create({
            data: {
                numero: data.numero,
                nome: data.nome,
                cnpj: data.cnpj,
                telefone: data.telefone,
                empresa: {
                    connect: { id: 1 },
                },
                fretePadrao: data.frete ? Number(data.frete) : null,
                cep: data.cep,
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.cidade,
                estado: data.estado,
                tipoVeiculo: data.tipoVeiculo,
            },
        });
    }
    async findAll() {
        return this.prisma.transportadora.findMany();
    }
    async findOne(id) {
        return this.prisma.transportadora.findUnique({ where: { id } });
    }
    async update(id, data) {
        return this.prisma.transportadora.update({
            where: { id },
            data: {
                nome: data.nome,
                cnpj: data.cnpj,
                telefone: data.telefone,
            },
        });
    }
    async remove(id) {
        return this.prisma.transportadora.delete({ where: { id } });
    }
};
exports.TransportadoraService = TransportadoraService;
exports.TransportadoraService = TransportadoraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransportadoraService);
//# sourceMappingURL=transportadora.service.js.map