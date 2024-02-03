-- CreateTable
CREATE TABLE "UserAdm" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserAdm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "afiliados" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioAdm" INTEGER,

    CONSTRAINT "afiliados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAdm_email_key" ON "UserAdm"("email");

-- AddForeignKey
ALTER TABLE "afiliados" ADD CONSTRAINT "afiliados_usuarioAdm_fkey" FOREIGN KEY ("usuarioAdm") REFERENCES "UserAdm"("id") ON DELETE SET NULL ON UPDATE CASCADE;
