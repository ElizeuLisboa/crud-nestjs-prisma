-- CreateTable
CREATE TABLE "AuditoriaAcao" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT,
    "operadorId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditoriaAcao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuditoriaAcao" ADD CONSTRAINT "AuditoriaAcao_operadorId_fkey" FOREIGN KEY ("operadorId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
