"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./modules/auth/auth.module");
const clientes_module_1 = require("./clientes/clientes.module");
const produtos_module_1 = require("./produtos/produtos.module");
const pedidos_module_1 = require("./pedidos/pedidos.module");
const pagamentos_module_1 = require("./pagamentos/pagamentos.module");
const prisma_module_1 = require("./prisma/prisma.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const comprovante_module_1 = require("./comprovantes/comprovante.module");
const multer_1 = __importDefault(require("multer"));
const platform_express_1 = require("@nestjs/platform-express");
const caixa_module_1 = require("./caixa/caixa.module");
const transportadora_module_1 = require("./transportadoras/transportadora.module");
const pix_module_1 = require("./pagamentos/pix/pix.module");
const auditoria_module_1 = require("./auditoria/auditoria.module");
const app_controller_1 = require("./app.controller");
const empresa_module_1 = require("./empresa/empresa.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            empresa_module_1.EmpresaModule,
            auth_module_1.AuthModule,
            clientes_module_1.ClientesModule,
            produtos_module_1.ProdutosModule,
            pedidos_module_1.PedidosModule,
            caixa_module_1.CaixaModule,
            pagamentos_module_1.PagamentosModule,
            pix_module_1.PixModule,
            dashboard_module_1.DashboardModule,
            comprovante_module_1.ComprovanteModule,
            transportadora_module_1.TransportadoraModule,
            auditoria_module_1.AuditoriaModule,
            platform_express_1.MulterModule.register({
                storage: multer_1.default.memoryStorage(),
            }),
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map