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
exports.FretesController = void 0;
const common_1 = require("@nestjs/common");
const fretes_service_1 = require("./fretes.service");
let FretesController = class FretesController {
    constructor(fretesService) {
        this.fretesService = fretesService;
    }
    calcular(cepDestino, peso) {
        return this.fretesService.calcularFrete(cepDestino, Number(peso));
    }
};
exports.FretesController = FretesController;
__decorate([
    (0, common_1.Get)("calcular"),
    __param(0, (0, common_1.Query)("cepDestino")),
    __param(1, (0, common_1.Query)("peso")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], FretesController.prototype, "calcular", null);
exports.FretesController = FretesController = __decorate([
    (0, common_1.Controller)("fretes"),
    __metadata("design:paramtypes", [fretes_service_1.FretesService])
], FretesController);
//# sourceMappingURL=fretes.controller.js.map