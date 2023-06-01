-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "Basis2" INTEGER NOT NULL,
    "Interface" INTEGER NOT NULL,
    "cms" INTEGER NOT NULL,
    "spms" INTEGER NOT NULL,
    "newperpay" INTEGER NOT NULL,
    "oldperpay" INTEGER NOT NULL,
    "utilitymaster" INTEGER NOT NULL,
    "internet" INTEGER NOT NULL,
    "exchangemail" INTEGER NOT NULL,
    "comments" TEXT,
    "authorId" TEXT,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
