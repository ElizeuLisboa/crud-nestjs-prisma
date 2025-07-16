const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const nome = 'Usuario Admin';
  const email = 'admin@email.com';
  const cpf = '12345678901';
  const password = 'senhaSegura123';
  const role = 'ADMIN'; // caixa alta conforme enum

  // Hash da senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Cria ou atualiza o admin (upsert)
  const admin = await prisma.cliente.upsert({
    where: { email },
    update: {
      nome,
      cpf,
      password: hashedPassword,
      role,
    },
    create: {
      nome,
      email,
      cpf,
      password: hashedPassword,
      role,
    },
  });

  console.log('Admin criado ou atualizado:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
