-- AlterTable
ALTER TABLE "User" ADD COLUMN     "groupMessageId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_groupMessageId_fkey" FOREIGN KEY ("groupMessageId") REFERENCES "GroupMessage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
