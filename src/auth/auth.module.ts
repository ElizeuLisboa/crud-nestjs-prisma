import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller'; 

import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    PrismaModule, // 👈 necessário para usar o PrismaService
  ],
  controllers: [AuthController], // 👈 aqui estava faltando
  providers: [AuthService, JwtStrategy], // 👈 aqui também
  exports: [JwtModule, PassportModule],
})

export class AuthModule {}
