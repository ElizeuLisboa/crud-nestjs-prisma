import { AuthService } from "./auth.service";
import { PrismaService } from "../../prisma/prisma.service";
import { LoginDto } from "./login.dto";
export declare class AuthController {
    private readonly authService;
    private readonly prisma;
    constructor(authService: AuthService, prisma: PrismaService);
    login(loginDto: LoginDto): Promise<{
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
    validarAdminLogin(body: {
        email: string;
        password: string;
    }): Promise<{
        id: number;
        nome: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
