import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Iniciando seed...");

  // Apagar todos os registros de pedidos e itens (se quiser limpar)
  await prisma.itemPedido.deleteMany();
  await prisma.pedido.deleteMany();

  // Clientes principais
  const clienteSuper = await prisma.cliente.findUnique({
    where: { email: "superuser@email.com" },
  });

  if (!clienteSuper) {
    const senhaSuper = await bcrypt.hash("senhaSuper@123", 10);
    await prisma.cliente.create({
      data: {
        nome: "Usuário Super",
        email: "superuser@email.com",
        password: senhaSuper,
        role: "SUPERUSER",
        cpf: "00000000001",
        cidade: "São Paulo",
        estado: "SP",
      },
    });
  }

  const clienteAdmin = await prisma.cliente.findUnique({
    where: { email: "admin@email.com" },
  });

  if (!clienteAdmin) {
    const senhaAdmin = await bcrypt.hash("senhaAdmin@123", 10);
    await prisma.cliente.create({
      data: {
        nome: "Usuário Admin",
        email: "admin@email.com",
        password: senhaAdmin,
        role: "ADMIN",
        cpf: "00000000002",
        cidade: "Rio de Janeiro",
        estado: "RJ",
      },
    });
  }

  // Produtos (somente se não houver produtos no banco)
  const produtosExistentes = await prisma.produto.count();
  if (produtosExistentes === 0) {
    const produtos = [
      { title: "Fone de Ouvido Bluetooth", categoria: "Eletrônicos", description: "Fone sem fio com microfone e cancelamento de ruído.", price: 149.9, estoque: 100, image: "https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg" },
      { title: "Smartphone Android", categoria: "Eletrônicos", description: 'Smartphone com tela de 6.5", 128GB de memória.', price: 1299.9, estoque: 100, image: "https://images.pexels.com/photos/6078122/pexels-photo-6078122.jpeg" },
      { title: "Notebook Ultrafino", categoria: "Informática", description: "Notebook leve e rápido com SSD de 512GB.", price: 2999.9, estoque: 100, image: "https://images.pexels.com/photos/18105/pexels-photo.jpg" },
      { title: "Mouse Gamer RGB", categoria: "Periféricos", description: "Mouse ergonômico com iluminação RGB.", price: 99.9, estoque: 100, image: "https://images.pexels.com/photos/163743/pexels-photo-163743.jpeg" },
      { title: "Teclado Mecânico", categoria: "Periféricos", description: "Teclado mecânico com switches azuis.", price: 199.9, estoque: 100, image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg" },
      { title: "Câmera Fotográfica DSLR", categoria: "Fotografia", description: "Câmera profissional com lente 18-55mm.", price: 3499.9, estoque: 100, image: "https://images.pexels.com/photos/51383/camera-lens-lens-camera-photography-51383.jpeg" },
      { title: "Caixa de Som Bluetooth", categoria: "Áudio", description: "Caixa de som portátil com bateria de longa duração.", price: 249.9, estoque: 100, image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg" },
      { title: 'Monitor LED 24"', categoria: "Informática", description: "Monitor Full HD com entrada HDMI e VGA.", price: 899.9, estoque: 100, image: "https://images.pexels.com/photos/572187/pexels-photo-572187.jpeg" },
      { title: "Relógio Smartwatch", categoria: "Wearables", description: "Relógio inteligente com monitoramento cardíaco.", price: 299.9, estoque: 100, image: "https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg" },
      { title: "Tablet 10 polegadas", categoria: "Eletrônicos", description: "Tablet com Android, ideal para estudos e entretenimento.", price: 799.9, estoque: 100, image: "https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg" },
      { title: "Webcam Full HD", categoria: "Periféricos", description: "Câmera para videochamadas com microfone embutido.", price: 159.9, estoque: 100, image: "https://images.pexels.com/photos/4031814/pexels-photo-4031814.jpeg" },
      { title: "Carregador Portátil (Power Bank)", categoria: "Acessórios", description: "10.000mAh para carregar dispositivos móveis.", price: 129.9, estoque: 100, image: "https://images.pexels.com/photos/4042803/pexels-photo-4042803.jpeg" },
      { title: "Headset Gamer com Microfone", categoria: "Áudio", description: "Fone com som 7.1 e microfone ajustável.", price: 179.9, estoque: 100, image: "https://images.pexels.com/photos/3394660/pexels-photo-3394660.jpeg" },
      { title: "HD Externo 1TB", categoria: "Informática", description: "HD portátil USB 3.0 para backup de arquivos.", price: 349.9, estoque: 100, image: "https://images.pexels.com/photos/159220/usb-harddisk-data-backup-159220.jpeg" },
      { title: "Controle Bluetooth para Celular", categoria: "Games", description: "Controle compatível com Android e iOS.", price: 119.9, estoque: 100, image: "https://images.pexels.com/photos/3945663/pexels-photo-3945663.jpeg" },
      { title: "Impressora Multifuncional", categoria: "Informática", description: "Imprime, copia e digitaliza com Wi-Fi.", price: 499.9, estoque: 100, image: "https://images.pexels.com/photos/3952075/pexels-photo-3952075.jpeg" },
      { title: "Luminária LED USB", categoria: "Casa", description: "Luminária flexível com entrada USB.", price: 49.9, estoque: 100, image: "https://images.pexels.com/photos/1095663/pexels-photo-1095663.jpeg" },
      { title: "Echo Dot (Alexa)", categoria: "Casa Inteligente", description: "Assistente virtual com controle por voz.", price: 299.9, estoque: 100, image: "https://images.pexels.com/photos/4008453/pexels-photo-4008453.jpeg" },
      { title: "Filtro de Linha com 5 tomadas", categoria: "Acessórios", description: "Filtro de linha com proteção contra surtos.", price: 59.9, estoque: 100, image: "https://images.pexels.com/photos/4391480/pexels-photo-4391480.jpeg" },
      { title: "Cabo USB Tipo C 1m", categoria: "Acessórios", description: "Cabo para carregamento rápido e transferência de dados.", price: 29.9, estoque: 100, image: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg" },
    ];

    await prisma.produto.createMany({ data: produtos });
  }

  console.log("✅ Seed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
