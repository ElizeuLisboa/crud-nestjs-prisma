/*
  Warnings:

  - You are about to drop the column `criadoEm` on the `Promocao` table. All the data in the column will be lost.
  - Added the required column `dataFim` to the `Promocao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataInicio` to the `Promocao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `freteGratis` to the `Promocao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Promocao" DROP COLUMN "criadoEm",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dataFim" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataInicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "freteGratis" BOOLEAN NOT NULL;
