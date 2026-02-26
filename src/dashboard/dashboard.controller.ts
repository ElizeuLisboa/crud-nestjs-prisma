import { Controller, Get, UseGuards } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { JwtAuthGuard } from "../modules/auth/jwt-auth.guard";
import { Roles } from "../modules/auth/roles.decorator";
import { Role } from "@prisma/client";
import { RolesGuard } from "../modules/auth/roles.guard";

@Controller("dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get("vendas-por-produto")
  async vendasPorProduto() {
    return this.dashboardService.getVendasPorProduto();
  }

  @Get("pedidos-por-status")
  async pedidosPorStatus() {
    return this.dashboardService.getPedidosPorStatus();
  }
}
