"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixService = void 0;
const common_1 = require("@nestjs/common");
const QRCode = __importStar(require("qrcode"));
let PixService = class PixService {
    constructor() {
        this.chave = process.env.PIX_CHAVE || "5511999999999";
    }
    gerarPix(dto) {
        if (!dto) {
            throw new common_1.BadRequestException("DTO do PIX não recebido");
        }
        const { valor, descricao, nome } = dto;
        if (valor == null || isNaN(valor)) {
            throw new common_1.BadRequestException(`Valor inválido para PIX: ${valor}`);
        }
        const valorFormatado = valor.toFixed(2);
        const payload = [
            "000201",
            "010212",
            "26" +
                (4 + this.chave.length).toString().padStart(2, "0") +
                "0014BR.GOV.BCB.PIX" +
                this.chave.length.toString().padStart(2, "0") +
                this.chave,
            "52040000",
            "5303986",
            "54" + valorFormatado.length.toString().padStart(2, "0") + valorFormatado,
            "5802BR",
            "59" + nome.length.toString().padStart(2, "0") + nome,
            "6010SAO PAULO",
            "62" + descricao.length.toString().padStart(2, "0") + descricao,
        ].join("");
        const payloadComCRC = payload + "6304" + this.crc16(payload);
        const txid = `PIX-${Date.now()}`;
        return {
            codigo: payloadComCRC,
            txid,
        };
    }
    async gerarQrCodeBase64(payload) {
        return QRCode.toDataURL(payload, {
            margin: 2,
            scale: 6,
        });
    }
    crc16(payload) {
        let polinomio = 0x1021;
        let resultado = 0xffff;
        for (let i = 0; i < payload.length; i++) {
            resultado ^= payload.charCodeAt(i) << 8;
            for (let j = 0; j < 8; j++) {
                if ((resultado & 0x8000) !== 0) {
                    resultado = (resultado << 1) ^ polinomio;
                }
                else {
                    resultado <<= 1;
                }
                resultado &= 0xffff;
            }
        }
        return resultado.toString(16).toUpperCase().padStart(4, "0");
    }
};
exports.PixService = PixService;
exports.PixService = PixService = __decorate([
    (0, common_1.Injectable)()
], PixService);
//# sourceMappingURL=pix.service.js.map