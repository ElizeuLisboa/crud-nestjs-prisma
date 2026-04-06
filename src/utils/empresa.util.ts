export function getEmpresaId(user: any, req: any): number {
  if (user.role === "SUPERUSER") {
    const empresaId = Number(req.headers["x-empresa-id"]);

    if (!empresaId) {
      throw new Error("Empresa não selecionada");
    }

    return empresaId;
  }

  return user.empresaId;
}