-- CreateTable
CREATE TABLE "ReplyMessage" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "authorId" TEXT,
    "messageId" TEXT,

    CONSTRAINT "ReplyMessage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReplyMessage" ADD CONSTRAINT "ReplyMessage_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReplyMessage" ADD CONSTRAINT "ReplyMessage_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;
