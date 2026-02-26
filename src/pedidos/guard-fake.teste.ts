import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";

@Injectable()
export class FakeAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    // Simula um usuário logado com clienteId = 1 (ou outro que exista no seu DB)
    req.user = { sub: 1, role: "SUPERUSER" }; 
    return true;
  }
}
