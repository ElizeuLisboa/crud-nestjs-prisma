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
exports.PedidosController = void 0;
const common_1 = require("@nestjs/common");
const pedidos_service_1 = require("./pedidos.service");
const create_pedido_dto_1 = require("./dto/create-pedido.dto");
const jwt_auth_guard_1 = require("../modules/auth/jwt-auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const empresa_util_1 = require("../utils/empresa.util");
let PedidosController = class PedidosController {
    constructor(pedidosService) {
        this.pedidosService = pedidosService;
    }
    criarPedidoSite(req, body) {
        return this.pedidosService.create(body, req.user);
    }
    criarPedido(req, body) {
        return this.pedidosService.create(body, req.user);
    }
    listarMeusPedidos(req) {
        return this.pedidosService.findByCliente(req.user.id, req.user);
    }
    listarTodos(req) {
        return this.pedidosService.listarTodos(req.user);
    }
    enviarComprovante(id, file, body) {
        return this.pedidosService.confirmarEntrega(id, body.nomeRecebedor, body.entregadorNome, file);
    }
    criarVendaCaixa(body, req) {
        const clienteId = req.user.id;
        return this.pedidosService.criarVendaCaixa(body, req.user);
    }
    buscarPorId(id, req) {
        return this.pedidosService.buscarPorId(Number(id), req.user);
    }
    listar(req) {
        const empresaId = (0, empresa_util_1.getEmpresaId)(req.user, req);
        return this.pedidosService.listarTodos(empresaId);
    }
};
exports.PedidosController = PedidosController;
__decorate([
    (0, common_1.Post)("site"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_pedido_dto_1.CreatePedidoDto]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "criarPedidoSite", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_pedido_dto_1.CreatePedidoDto]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "criarPedido", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("meus"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "listarMeusPedidos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("todos"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "listarTodos", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(":id/comprovante"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "enviarComprovante", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)("venda-caixa"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pedido_dto_1.CreatePedidoDto, Object]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "criarVendaCaixa", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "listar", null);
exports.PedidosController = PedidosController = __decorate([
    (0, common_1.Controller)("pedidos"),
    __metadata("design:paramtypes", [pedidos_service_1.PedidosService])
], PedidosController);
//# sourceMappingURL=pedidos.controller.js.map