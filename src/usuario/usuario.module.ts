import { Module } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuario.controller";
import { AuthModule } from "../modules/auth/auth.module";

@Module({
  imports: [AuthModule],
  providers: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}

// import { Module } from "@nestjs/common";
// import { JwtModule } from "@nestjs/jwt";
// import { UsuarioService } from "./usuario.service";

// @Module({
//   imports: [
//     JwtModule.register({
//       secret: process.env.JWT_SECRET || "segredo",
//       signOptions: { expiresIn: "1d" },
//     }),
//   ],
//   providers: [UsuarioService],
//   exports: [UsuarioService],
// })
// export class UsuarioModule {}
