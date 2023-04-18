/*
  Warnings:

  - You are about to drop the column `login` on the `Player` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nickname]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Player` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Player_login_key";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "login",
ADD COLUMN     "email" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "nickname" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Player_nickname_key" ON "Player"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Player_email_key" ON "Player"("email");
