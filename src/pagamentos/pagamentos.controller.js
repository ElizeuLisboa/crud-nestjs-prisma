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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentosController = void 0;
const common_1 = require("@nestjs/common");
const pagamentos_service_1 = require("./pagamentos.service");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../modules/auth/jwt-auth.guard");
let PagamentosController = class PagamentosController {
    constructor(prisma, pagamentosService) {
        this.prisma = prisma;
        this.pagamentosService = pagamentosService;
    }
    async webhook(body) {
        return this.pagamentosService.processarWebhookMP(body);
    }
    async statusPix(txid) {
        return this.pagamentosService.verificarStatusPix(txid);
    }
    async simularPix(txid) {
        return this.pagamentosService.simularPixPago(txid);
    }
    async checkout(pedidoId) {
        return this.pagamentosService.criarCheckoutMercadoPago(pedidoId);
    }
    async pagarMercadoPago(dto) {
        console.log("RAW BODY:", dto);
        const payload = {
            pedidoId: Number(dto.pedidoId),
            valor: Number(dto.valor),
            token: dto.token,
            installments: Number(dto.installments),
            paymentMethodId: dto.paymentMethodId,
            payer: dto.payer,
        };
        console.log("DTO TRATADO:", payload);
        return this.pagamentosService.pagarComCartao(payload);
    }
    criarPix(pedidoId, req) {
        return this.pagamentosService.criarPix(Number(pedidoId), req.user);
    }
};
exports.PagamentosController = PagamentosController;
__decorate([
    (0, common_1.Post)("webhook/mercadopago"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PagamentosController.prototype, "webhook", null);
__decorate([
    (0, common_1.Get)("status/:txid"),
    __param(0, (0, common_1.Param)("txid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagamentosController.prototype, "statusPix", null);
__decorate([
    (0, common_1.Post)("simular/:txid"),
    __param(0, (0, common_1.Param)("txid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PagamentosController.prototype, "simularPix", null);
__decorate([
    (0, common_1.Post)("mercadopago/checkout"),
    __param(0, (0, common_1.Body)("pedidoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PagamentosController.prototype, "checkout", null);
__decorate([
    (0, common_1.Post)("mercadopago/cartao"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PagamentosController.prototype, "pagarMercadoPago", null);
__decorate([
    (0, common_1.Post)("pix"),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)("pedidoId")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PagamentosController.prototype, "criarPix", null);
exports.PagamentosController = PagamentosController = __decorate([
    (0, common_1.Controller)("pagamentos"),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pagamentos_service_1.PagamentosService])
], PagamentosController);
//# sourceMappingURL=pagamentos.controller.js.map