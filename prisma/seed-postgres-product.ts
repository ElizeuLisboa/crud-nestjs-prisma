import { PrismaClient } from "@prisma/client";
import fetch from "node-fetch";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

// pasta absoluta onde as imagens serão salvas
const UPLOAD_DIR = "E:/CRUD/uploads/produtos";

async function baixarImagem(url: string, nomeArquivo: string): Promise<string> {
  try {
    const destino = path.join(UPLOAD_DIR, nomeArquivo);

    // cria pasta caso não exista
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const res = await fetch(url);
    if (!res.ok) {
      console.log("❌ Erro ao baixar imagem:", url);
      return "";
    }

    const buffer = await res.buffer();
    fs.writeFileSync(destino, buffer);

    // retorna caminho que será gravado no banco
    return `/uploads/produtos/${nomeArquivo}`;
  } catch (err) {
    console.log("Erro ao salvar imagem:", err);
    return "";
  }
}

// Normalização de categorias
function mapearCategoria(nome: string): string {
  const n = nome.toLowerCase();

  if (n.includes("shirt") || n.includes("tshirt") || n.includes("camis"))
    return "Camisetas";

  if (n.includes("jacket") || n.includes("coat"))
    return "Jaquetas";

  if (n.includes("bag") || n.includes("backpack"))
    return "Bolsas";

  if (n.includes("fragrance") || n.includes("perfume"))
    return "Perfumes";

  if (n.includes("watch"))
    return "Relógios";

  if (n.includes("shoes") || n.includes("sneaker"))
    return "Calçados";

  if (n.includes("laptop") || n.includes("pc") || n.includes("desktop"))
    return "Informática";

  if (n.includes("smartphone") || n.includes("phone"))
    return "Celulares";

  if (n.includes("decoration") || n.includes("furniture"))
    return "Decoração";

  return "Outros";
}

async function main() {
  console.log("🟣 Iniciando seed de produtos...");

  // carrega APIs
  const dummy = await fetch("https://dummyjson.com/products?limit=150").then(r => r.json());
  const fakeStore = await fetch("https://fakestoreapi.com/products").then(r => r.json());

  const todosProdutos = [
    ...dummy.products.map((p: any) => ({
      title: p.title,
      description: p.description,
      price: Number(p.price),
      image: p.thumbnail || p.images?.[0],
      categoria: mapearCategoria(p.category),
    })),
    ...fakeStore.map((p: any) => ({
      title: p.title,
      description: p.description,
      price: Number(p.price),
      image: p.image,
      categoria: mapearCategoria(p.category),
    })),
  ];

  console.log(`📦 Total produtos encontrados: ${todosProdutos.length}`);

  for (const p of todosProdutos) {
    try {
      // cria categoria caso não exista
      let categoria = await prisma.categoriaProduto.findFirst({
        where: { nome: p.categoria },
      });

      if (!categoria) {
        categoria = await prisma.categoriaProduto.create({
          data: { nome: p.categoria },
        });
      }

      // baixa imagem local
      const nomeArquivo = p.title
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "_")
        .slice(0, 40) + ".jpg";

      const caminhoLocal = await baixarImagem(p.image, nomeArquivo);

      await prisma.produto.create({
        data: {
          title: p.title,
          description: p.description,
          price: p.price,
          estoque: Math.floor(Math.random() * 50) + 5,
          image: caminhoLocal,
          categoriaId: categoria.id,
          codigoBarras: `789${Math.floor(Math.random() * 999999999)}`,
        },
      });

      console.log("✔ Produto inserido:", p.title);
    } catch (err) {
      console.log("❌ Erro ao inserir produto:", p.title, err);
    }
  }

  console.log("🌟 SEED FINALIZADO!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
