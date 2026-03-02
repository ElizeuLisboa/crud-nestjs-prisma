/*
  Warnings:

  - You are about to drop the column `mensagemCupom` on the `Empresa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "empresaId" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Empresa" DROP COLUMN "mensagemCupom";

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
