/*
  Warnings:

  - A unique constraint covering the columns `[codigoExterno]` on the table `Pagamento` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `empresaId` to the `Pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresaId` to the `Transportadora` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pagamento" ADD COLUMN     "codigoExterno" TEXT,
ADD COLUMN     "descricao" TEXT,
ADD COLUMN     "empresaId" INTEGER NOT NULL,
ADD COLUMN     "pixCodigo" TEXT,
ADD COLUMN     "pixQrCodeBase64" TEXT,
ADD COLUMN     "pixStatus" TEXT,
ADD COLUMN     "pixTxid" TEXT;

-- AlterTable
ALTER TABLE "Transportadora" ADD COLUMN     "empresaId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pagamento_codigoExterno_key" ON "Pagamento"("codigoExterno");

-- AddForeignKey
ALTER TABLE "Transportadora" ADD CONSTRAINT "Transportadora_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagamento" ADD CONSTRAINT "Pagamento_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
