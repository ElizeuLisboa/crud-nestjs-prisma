import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || "default-secret", // <- nunca mais undefined
    });
  }

  async validate(payload: any) {
    console.log("🟢 PAYLOAD JWT RECEBIDO:", payload);
    if (!payload || !payload.sub) {
      throw new UnauthorizedException("Payload do token inválido");
    }

    // Retorna todos os dados que estavam antes
    return {
      id: payload.sub,
      email: payload.email,
      nome: payload.nome,
      role: payload.role,
      cep: payload.cep,
      cidade: payload.cidade,
      estado: payload.estado,
      telefone: payload.telefone,
    };
  }

}
