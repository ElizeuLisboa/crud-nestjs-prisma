import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../../prisma/prisma.service";
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validarUsuario(email: string, senha: string): Promise<{
        email: string | null;
        password: string;
        id: number;
        nome: string;
        role: import(".prisma/client").$Enums.Role;
        cep: string | null;
        cidade: string | null;
        estado: string | null;
        empresaId: number;
    }>;
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        cliente: {
            id: number;
            nome: string;
            email: string | null;
            role: import(".prisma/client").$Enums.Role;
            empresaId: number;
            cep: string | null;
            cidade: string | null;
            estado: string | null;
        };
        jwt: string;
    }>;
}
