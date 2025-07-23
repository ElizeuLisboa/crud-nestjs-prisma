import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles.decorator";


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}


