// // src/auth/roles.guard.ts
// import {
//   Injectable,
//   CanActivate,
//   ExecutionContext,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { ROLES_KEY } from './roles.decorator';
// import { JwtAuthGuard } from './jwt-auth.guard';

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
//       context.getHandler(),
//       context.getClass(),
//     ]);
//     if (!requiredRoles || requiredRoles.length === 0) {
//       return true; // rota não exige role específica
//     }

//     const request = context.switchToHttp().getRequest();
//     const user = request.user;

//     return requiredRoles.includes(user.role);
//   }
// }

// src/auth/roles.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );
    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role);
  }
}
