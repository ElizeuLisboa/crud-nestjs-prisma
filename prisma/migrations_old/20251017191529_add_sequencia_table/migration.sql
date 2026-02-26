-- CreateTable
CREATE TABLE "public"."Sequencia" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "proximoNumero" INTEGER NOT NULL DEFAULT 1,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sequencia_pkey" PRIMARY KEY ("id")
);
