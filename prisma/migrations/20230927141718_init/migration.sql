/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "phone" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_key" ON "Users"("phone");
