import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['error'], // 🔥 força mostrar só erro
});

export default prisma;
