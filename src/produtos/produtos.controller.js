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
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const produtos_service_1 = require("./produtos.service");
const jwt_auth_guard_1 = require("../modules/auth/jwt-auth.guard");
const roles_decorator_1 = require("../modules/auth/roles.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
let ProdutosController = class ProdutosController {
    constructor(produtosService) {
        this.produtosService = produtosService;
        this.prisma = new prisma_service_1.PrismaService();
    }
    async create(file, dto) {
        let fotoUrl = dto.image;
        let cloudinaryId = null;
        if (file) {
            const result = await this.produtosService.uploadImagem(file);
            fotoUrl = result.fotoUrl;
            cloudinaryId = result.cloudinaryId;
        }
        return this.produtosService.create({
            ...dto,
            fotoUrl,
            cloudinaryId,
            price: Number(dto.price),
            estoque: Number(dto.estoque),
        });
    }
    findByBarcode(codigo) {
        return this.produtosService.findByBarcode(codigo);
    }
    buscar(termo) {
        if (!termo?.trim()) {
            throw new common_1.BadRequestException("Nenhum termo informado");
        }
        return this.produtosService.buscarProdutos(termo);
    }
    async listarFamilias() {
        return this.produtosService.listarFamilias();
    }
    async listarCategorias() {
        return this.produtosService.listarCategorias();
    }
    async listar(familia, nome) {
        return this.produtosService.listar({
            familia,
            nome,
        });
    }
    findOne(id) {
        const parsedId = Number(id);
        if (isNaN(parsedId)) {
            throw new common_1.BadRequestException("ID inválido");
        }
        return this.produtosService.findOne(parsedId);
    }
};
exports.ProdutosController = ProdutosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)("ADMIN", "SUPERUSER"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("imagem")),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("barcode/:codigo"),
    __param(0, (0, common_1.Param)("codigo")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "findByBarcode", null);
__decorate([
    (0, common_1.Get)("buscar"),
    __param(0, (0, common_1.Query)("termo")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "buscar", null);
__decorate([
    (0, common_1.Get)("familias"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "listarFamilias", null);
__decorate([
    (0, common_1.Get)("categorias"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "listarCategorias", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("familia")),
    __param(1, (0, common_1.Query)("nome")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "findOne", null);
exports.ProdutosController = ProdutosController = __decorate([
    (0, common_1.Controller)("produtos"),
    __metadata("design:paramtypes", [produtos_service_1.ProdutosService])
], ProdutosController);
//# sourceMappingURL=produtos.controller.js.map