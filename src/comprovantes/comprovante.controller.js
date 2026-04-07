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
exports.ComprovanteController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const comprovante_service_1 = require("./comprovante.service");
const cloudinary_1 = require("cloudinary");
const stream_1 = require("stream");
let ComprovanteController = class ComprovanteController {
    constructor(comprovanteService) {
        this.comprovanteService = comprovanteService;
    }
    async uploadComprovante(file, body) {
        const { pedidoId, nomeRecebedor, entregadorNome } = body;
        console.log("📦 Dados recebidos:", {
            pedidoId,
            nomeRecebedor,
            entregadorNome,
        });
        console.log("Cloudinary:", {
            cloud: process.env.CLOUDINARY_CLOUD_NAME,
            key: process.env.CLOUDINARY_API_KEY,
        });
        const streamUpload = (file) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary_1.v2.uploader.upload_stream({ folder: "comprovantes" }, (error, result) => {
                    if (result)
                        resolve(result);
                    else
                        reject(error);
                });
                stream_1.Readable.from(file.buffer).pipe(stream);
            });
        };
        const uploadResult = await streamUpload(file);
        const fotoUrl = uploadResult.secure_url;
        const cloudinaryId = uploadResult.public_id;
        return this.comprovanteService.salvarComprovante({
            pedidoId: Number(pedidoId),
            nomeRecebedor,
            entregadorNome,
            fotoUrl,
            cloudinaryId,
        });
    }
};
exports.ComprovanteController = ComprovanteController;
__decorate([
    (0, common_1.Post)("upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("imagem", {
        storage: (0, multer_1.memoryStorage)(),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ComprovanteController.prototype, "uploadComprovante", null);
exports.ComprovanteController = ComprovanteController = __decorate([
    (0, common_1.Controller)("comprovantes"),
    __metadata("design:paramtypes", [comprovante_service_1.ComprovanteService])
], ComprovanteController);
//# sourceMappingURL=comprovante.controller.js.map