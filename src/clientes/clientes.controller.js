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
exports.ClientesController = void 0;
const common_1 = require("@nestjs/common");
const clientes_service_1 = require("./clientes.service");
const update_cliente_dto_1 = require("./dto/update-cliente.dto");
const jwt_auth_guard_1 = require("../modules/auth/jwt-auth.guard");
const roles_guard_1 = require("../modules/auth/roles.guard");
const roles_decorator_1 = require("../modules/auth/roles.decorator");
const user_decorator_1 = require("../modules/auth/user.decorator");
const create_cliente_dto_1 = require("./dto/create-cliente.dto");
const atualizar_cadastro_rapido_dto_1 = require("./dto/atualizar-cadastro-rapido.dto");
const create_cliente_publico_dto_1 = require("./dto/create-cliente-publico.dto");
let ClientesController = class ClientesController {
    constructor(clientesService) {
        this.clientesService = clientesService;
    }
    getPerfil(user) {
        return { perfil: user };
    }
    findAll() {
        return this.clientesService.findAll();
    }
    async buscarPorCpf(cpf) {
        if (!cpf || cpf.trim() === "") {
            throw new common_1.BadRequestException("CPF é obrigatório");
        }
        return this.clientesService.buscarPorCpf(cpf);
    }
    findOne(id) {
        return this.clientesService.findOne(id);
    }
    async cadastroRapido(dto) {
        return this.clientesService.cadastroRapido(dto);
    }
    async atualizarCadastroRapido(cpf, body) {
        return this.clientesService.atualizarCadastroRapido(cpf, body);
    }
    async update(id, updateClienteDto, req) {
        if (updateClienteDto.role && req.user?.role !== "SUPERUSER") {
            throw new common_1.ForbiddenException("Apenas SUPERUSER pode alterar o campo role");
        }
        return this.clientesService.update(id, updateClienteDto);
    }
    async remove(id) {
        const cliente = await this.clientesService.findOne(id);
        if (!cliente) {
            throw new common_1.NotFoundException("Cliente não encontrado");
        }
        if (cliente.role === "SUPERUSER") {
            throw new common_1.ForbiddenException("Você não pode excluir um SUPERUSER");
        }
        return this.clientesService.remove(id);
    }
    async autoCadastro(dto) {
        return this.clientesService.autoCadastro(dto);
    }
};
exports.ClientesController = ClientesController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("perfil"),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "getPerfil", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)("ADMIN", "SUPERUSER"),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("buscar-cpf/:cpf"),
    __param(0, (0, common_1.Param)("cpf")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "buscarPorCpf", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)("ADMIN", "SUPERUSER"),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)("ADMIN", "SUPERUSER", "CAIXA"),
    (0, common_1.Post)("cadastro-rapido"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "cadastroRapido", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)("ADMIN", "SUPERUSER", "CAIXA"),
    (0, common_1.Put)("cadastro-rapido/:cpf"),
    __param(0, (0, common_1.Param)("cpf")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizar_cadastro_rapido_dto_1.AtualizarCadastroRapidoDto]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "atualizarCadastroRapido", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)("ADMIN", "SUPERUSER"),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cliente_dto_1.UpdateClienteDto, Object]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)("ADMIN", "SUPERUSER"),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)("auto-cadastro"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_publico_dto_1.CreateClientePublicoDto]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "autoCadastro", null);
exports.ClientesController = ClientesController = __decorate([
    (0, common_1.Controller)("clientes"),
    __metadata("design:paramtypes", [clientes_service_1.ClientesService])
], ClientesController);
//# sourceMappingURL=clientes.controller.js.map