import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { PagamentosService } from "../src/pagamentos/pagamentos.service";
//import { PagamentosService } from "./pagamentos.service";

const prisma = new PrismaClient();

// Criando ConfigService com variáveis de teste
const configService = new ConfigService({
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "chave_teste",
});

// Agora instanciamos PagamentosService sem TypeScript reclamar
const pagamentosService = new PagamentosService(configService, prisma);

// Exemplo de uso
async function main() {
  const sessionMock = {
    id: "sessao_teste_123",
    customer_email: "teste@teste.com",
    amount_total: 1000,
    metadata: {
      items: JSON.stringify([{ id: 1, quantidade: 1, nome: "Produto Teste", preco: 10 }]),
    },
  } as any;

  await pagamentosService.salvarPedido(sessionMock);
  console.log("Pedido criado!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
