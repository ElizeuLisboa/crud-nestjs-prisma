require("dotenv").config();
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

// 🔐 CONFIG (usa seu .env)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 📁 SUA PASTA
const pasta = "E:/CRUD/uploads/produtos/Doces";

async function uploadImages() {
  try {
    const files = fs.readdirSync(pasta);

    for (const file of files) {
      const filePath = path.join(pasta, file);

      console.log("⬆️ Enviando:", file);

      const result = await cloudinary.uploader.upload(filePath, {
        folder: "produtos/doces",
      });

      console.log("✅ URL:", result.secure_url);
    }

    console.log("\n🎉 Upload finalizado!");
  } catch (err) {
    console.error("❌ Erro:", err);
  }
}

uploadImages();