import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import axios from "axios";
import "./src/lib/prisma" // Importa a instância do Prisma configurada

// const prisma = new PrismaClient();
const pastaUploads = path.join("E:/CRUD/uploads/produtos");

async function baixarImagem(url: string, destino: string) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  await fs.promises.writeFile(destino, response.data);
  console.log(`✅ Baixada: ${destino}`);
}

async function migrarImagens() {
  try {
    await fs.promises.mkdir(pastaUploads, { recursive: true });

    const produtos = await prisma.produto.findMany();

    for (const produto of produtos) {
      if (!produto.image || produto.image.startsWith("/uploads/")) {
        console.log(`⏭️ Pulando produto ${produto.id} (já migrado ou sem imagem)`);
        continue;
      }

      const nomeArquivo = `produto-${produto.id}.jpg`;
      const caminhoLocal = path.join(pastaUploads, nomeArquivo);

      try {
        await baixarImagem(produto.image, caminhoLocal);

        // Atualiza no banco o novo caminho local
        await prisma.produto.update({
          where: { id: produto.id },
          data: { image: `/uploads/produtos/${nomeArquivo}` },
        });

        console.log(`✅ Atualizado produto ${produto.id}`);
      } catch (err) {
        console.error(`❌ Erro ao migrar produto ${produto.id}:`, String(err));
        //console.error(`❌ Erro ao migrar produto ${produto.id}:`, err?.message || err);
      }
    }

    console.log("🎉 Migração concluída!");
  } catch (err) {
    console.error("Erro geral na migração:", err);
  } finally {
    await prisma.$disconnect();
  }
}

migrarImagens();
