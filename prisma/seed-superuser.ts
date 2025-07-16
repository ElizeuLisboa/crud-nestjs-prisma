// prisma/seed-superuser.ts
// ⚠️ Script apenas para ambiente local (não rodar em produção)
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const senha = await bcrypt.hash('senhaSuper123', 10);

  await prisma.cliente.create({
    data: {
      nome: 'Usuário Super',
      email: 'superuser@email.com',
      cpf: '99999999999',
      password: senha,
      role: 'SUPERUSER',
    },
  });

  console.log('✅ Superuser criado com sucesso');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
