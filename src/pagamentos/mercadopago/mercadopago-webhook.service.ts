import * as crypto from "crypto";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class MercadoPagoWebhookService {
  validateSignature(
    signature: string,
    rawBody: Buffer,
    secret: string,
  ) {
    if (!signature) {
      throw new UnauthorizedException("Assinatura ausente");
    }

    const parts = signature.split(",");
    const ts = parts.find(p => p.startsWith("ts="))?.replace("ts=", "");
    const v1 = parts.find(p => p.startsWith("v1="))?.replace("v1=", "");

    if (!ts || !v1) {
      throw new UnauthorizedException("Assinatura inválida");
    }

    const manifest = `${ts}.${rawBody.toString("utf8")}`;

    const expected = crypto
      .createHmac("sha256", secret)
      .update(manifest)
      .digest("hex");

    if (expected !== v1) {
      throw new UnauthorizedException("Assinatura não confere");
    }
  }
}
