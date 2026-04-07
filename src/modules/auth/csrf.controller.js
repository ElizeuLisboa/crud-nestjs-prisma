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
exports.CsrfController = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let CsrfController = class CsrfController {
    getCsrf(res) {
        const csrfToken = (0, crypto_1.randomBytes)(24).toString('hex');
        res.cookie('XSRF-TOKEN', csrfToken, { httpOnly: false, sameSite: 'lax', path: '/' });
        return res.json({ csrfToken });
    }
};
exports.CsrfController = CsrfController;
__decorate([
    (0, common_1.Get)('csrf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CsrfController.prototype, "getCsrf", null);
exports.CsrfController = CsrfController = __decorate([
    (0, common_1.Controller)('auth')
], CsrfController);
//# sourceMappingURL=csrf.controller.js.map