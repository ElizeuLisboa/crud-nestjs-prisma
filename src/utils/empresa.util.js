"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmpresaId = getEmpresaId;
function getEmpresaId(user, req) {
    if (user.role === "SUPERUSER") {
        const empresaId = Number(req.headers["x-empresa-id"]);
        if (!empresaId) {
            throw new Error("Empresa não selecionada");
        }
        return empresaId;
    }
    return user.empresaId;
}
//# sourceMappingURL=empresa.util.js.map