/*
  Warnings:

  - You are about to drop the column `data` on the `AuditoriaAcao` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `AuditoriaAcao` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `AuditoriaAcao` table. All the data in the column will be lost.
  - Added the required column `acao` to the `AuditoriaAcao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AuditoriaAcao" DROP COLUMN "data",
DROP COLUMN "descricao",
DROP COLUMN "tipo",
ADD COLUMN     "acao" TEXT NOT NULL,
ADD COLUMN     "autorizadoPor" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "detalhes" TEXT,
ADD COLUMN     "valor" DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "AuditoriaAcao" ADD CONSTRAINT "AuditoriaAcao_autorizadoPor_fkey" FOREIGN KEY ("autorizadoPor") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
