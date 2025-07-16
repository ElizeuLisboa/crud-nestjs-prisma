import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>("JWT_SECRET")!,
    });
  }


  async validate(payload: any) {
    // ✅ Agora o role será acessível via req.user.role
    return {
      sub: payload.sub,
      email: payload.email,
      nome: payload.nome,
      role: payload.role,
      cep: payload.cep,
      cidade: payload.cidade,
      estado:payload.estado,
    };
  }
}
