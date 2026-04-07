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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const client_1 = require("@prisma/client");
let ClientesService = class ClientesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.cliente.findMany();
    }
    async findOne(id) {
        const cliente = await this.prisma.cliente.findUnique({
            where: { id },
        });
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
        return cliente;
    }
    async update(id, data) {
        const updateData = { ...data };
        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }
        return this.prisma.cliente.update({
            where: { id },
            data: updateData,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.cliente.delete({
            where: { id },
        });
    }
    async buscarPorCpf(cpf) {
        return this.prisma.cliente.findUnique({
            where: { cpf },
        });
    }
    async cadastroRapido(data) {
        return this.prisma.cliente.create({
            data: {
                ...data,
                password: await bcrypt.hash("123456@1234", 10),
                role: client_1.Role.CLIENTE,
                empresa: {
                    connect: { id: 1 },
                },
                cep: null,
                logradouro: null,
                cidade: null,
                estado: null,
            },
        });
    }
    async atualizarCadastroRapido(cpf, data) {
        const updateData = { ...data };
        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }
        return this.prisma.cliente.update({
            where: { cpf },
            data: updateData,
        });
    }
    async autoCadastro(dto) {
        const existe = await this.prisma.cliente.findFirst({
            where: {
                OR: [{ email: dto.email }, { cpf: dto.cpf }],
            },
        });
        if (existe) {
            throw new common_1.BadRequestException("Email ou CPF já cadastrados");
        }
        const hash = await bcrypt.hash(dto.password, 10);
        const cliente = await this.prisma.cliente.create({
            data: {
                nome: dto.nome,
                email: dto.email,
                cpf: dto.cpf,
                telefone: dto.telefone,
                empresa: {
                    connect: { id: 1 },
                },
                cep: dto.cep,
                logradouro: dto.logradouro,
                cidade: dto.cidade,
                estado: dto.estado,
                password: hash,
                role: "CLIENTE",
            },
        });
        return {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
        };
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map