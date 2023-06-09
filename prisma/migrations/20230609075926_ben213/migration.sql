-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "senderId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "online" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
