-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "FromTime" AS ENUM ('from_0700AM', 'from_0800AM', 'from_0900AM', 'from_1000AM', 'from_1100AM', 'from_1200AM', 'from_1300AM', 'from_1400AM', 'from_1500AM', 'from_1600AM');

-- CreateEnum
CREATE TYPE "ToTime" AS ENUM ('to_0800AM', 'to_0900AM', 'to_1000AM', 'to_1100AM', 'to_1200AM', 'to_1300AM', 'to_1400AM', 'to_1500AM', 'to_1600AM', 'to_1700AM');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "from" "FromTime" NOT NULL,
    "to" "ToTime" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
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
ALTER TABLE "Report" ADD CONSTRAINT "Report_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
