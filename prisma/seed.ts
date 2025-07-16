import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import 'dotenv/config'; // 👈 importante para carregar o .env

const prisma = new PrismaClient();

async function main() {
  console.log('🧹 Limpando usuários SUPERUSER e ADMIN antigos...');

  await prisma.cliente.deleteMany({
    where: {
      email: { in: ['superuser@email.com', 'admin@email.com'] },
    },
  });

  console.log('🔐 Gerando hashes das senhas...');

  const superuserPassword = process.env.SUPERUSER_PASSWORD || 'senhaSuper123';
  const adminPassword = process.env.ADMIN_PASSWORD || 'senhaAdmin123';

  const hashSuper = await bcrypt.hash(superuserPassword, 10);
  const hashAdmin = await bcrypt.hash(adminPassword, 10);

  console.log('👤 Criando usuários SUPERUSER e ADMIN...');

  await prisma.cliente.createMany({
    data: [
      {
        nome: 'Usuário Super',
        email: 'superuser@email.com',
        password: hashSuper,
        cpf: '00000000000', // se obrigatório
        role: 'SUPERUSER',
      },
      {
        nome: 'Usuário Admin',
        email: 'admin@email.com',
        password: hashAdmin,
        cpf: '11111111111',
        role: 'ADMIN',
      },
    ],
  });

  // continua com produtos...
}


// import { PrismaClient } from '@prisma/client';
// import fetch from 'node-fetch';
// import bcrypt from 'bcrypt';

// const prisma = new PrismaClient();

// async function main() {
//   console.log('👤 Criando usuários padrão...');

//   const senha = await bcrypt.hash('senhaSuper123', 10);
//   await prisma.cliente.upsert({
//     where: { email: 'superuser@email.com' },
//     update: {      
//     },
//     create: {
//       nome: 'Usuário Super',
//       email: 'superuser@email.com',
//       password: senha,
//       role: 'SUPERUSER',
//     },
//   });

//   await prisma.cliente.upsert({
//     where: { email: 'admin@email.com' },
//     update: {},
//     create: {
//       nome: 'Usuário Admin',
//       email: 'admin@email.com',
//       password: senha,
//       role: 'ADMIN',

//     },
//   });

  // console.log('📦 Importando produtos de teste da FakeStoreAPI...');

  // const res = await fetch('https://fakestoreapi.com/products');
  // const produtos = await res.json() as {
  //   id: number;
  //   title: string;
  //   description: string;
  //   price: number;
  //   image: string;
  // }[];

  // for (const p of produtos) {
  //   await prisma.produto.upsert({
  //     where: { title: p.title },
  //     update: {},
  //     create: {
  //       title: p.title,
  //       description: p.description,
  //       price: p.price,
  //       image: p.image,
  //     },
  //   });
  // }

  // console.log('✅ Seed finalizado com sucesso!');
// }

main()
  .catch((e) => console.error('Erro no seed:', e))
  .finally(() => prisma.$disconnect());
