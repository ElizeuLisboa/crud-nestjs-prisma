import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CsrfGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const csrfHeader = request.headers['x-csrf-token'] as string;
    const csrfCookie = request.cookies['XSRF-TOKEN'];

    if (!csrfHeader || csrfHeader !== csrfCookie) {
      throw new ForbiddenException('CSRF token inválido');
    }

    return true;
  }
}
