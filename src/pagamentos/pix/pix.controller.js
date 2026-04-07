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
exports.PixController = void 0;
const common_1 = require("@nestjs/common");
const pix_service_1 = require("./pix.service");
const gerar_pix_dto_1 = require("./dto/gerar.pix-dto");
let PixController = class PixController {
    constructor(pixService) {
        this.pixService = pixService;
    }
    async gerar(dto) {
        const pix = this.pixService.gerarPix(dto);
        const qrCodeBase64 = await this.pixService.gerarQrCodeBase64(pix.codigo);
        return {
            codigo: pix.codigo,
            txid: pix.txid,
            qrCodeBase64,
        };
    }
};
exports.PixController = PixController;
__decorate([
    (0, common_1.Post)("gerar"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gerar_pix_dto_1.GerarPixDto]),
    __metadata("design:returntype", Promise)
], PixController.prototype, "gerar", null);
exports.PixController = PixController = __decorate([
    (0, common_1.Controller)("pagamentos/pix"),
    __metadata("design:paramtypes", [pix_service_1.PixService])
], PixController);
//# sourceMappingURL=pix.controller.js.map