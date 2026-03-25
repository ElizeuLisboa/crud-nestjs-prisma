import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || "default-secret",
    });
  }

  async validate(payload: any) {
    console.log("?? PAYLOAD JWT RECEBIDO:", payload);

    try {
      if (!payload || !payload.sub) {
        throw new UnauthorizedException("Payload inválido");
      }

       if (payload.empresaId) {
         this.prisma.setEmpresaId(payload.empresaId);
       }

      return {
        id: payload.sub,
        email: payload.email,
        nome: payload.nome,
        role: payload.role,
        empresaId: payload.empresaId,
      };
    } catch (err) {
      console.log("💥 ERRO NO VALIDATE:", err);
      throw err;
    }
  }
}
