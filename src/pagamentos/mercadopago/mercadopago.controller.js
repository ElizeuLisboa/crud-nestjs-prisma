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
exports.MercadoPagoController = void 0;
const common_1 = require("@nestjs/common");
const pagamentos_service_1 = require("../pagamentos.service");
let MercadoPagoController = class MercadoPagoController {
    constructor(pagamentosService) {
        this.pagamentosService = pagamentosService;
    }
    async criarCheckout(pedidoId) {
        return this.pagamentosService.criarCheckoutMercadoPago(pedidoId);
    }
};
exports.MercadoPagoController = MercadoPagoController;
__decorate([
    (0, common_1.Post)("checkout"),
    __param(0, (0, common_1.Body)("pedidoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MercadoPagoController.prototype, "criarCheckout", null);
exports.MercadoPagoController = MercadoPagoController = __decorate([
    (0, common_1.Controller)("pagamentos/mercadopago"),
    __metadata("design:paramtypes", [pagamentos_service_1.PagamentosService])
], MercadoPagoController);
//# sourceMappingURL=mercadopago.controller.js.map