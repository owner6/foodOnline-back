/*
  Warnings:

  - You are about to alter the column `firstname` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `lastname` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `phone` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(13)`.
  - You are about to alter the column `password` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "firstname" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "lastname" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(13),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
