/*
  Warnings:

  - You are about to drop the column `name` on the `experiences` table. All the data in the column will be lost.
  - Added the required column `templateId` to the `experiences` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `schools` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "schools" DROP CONSTRAINT "schools_userId_fkey";

-- AlterTable
ALTER TABLE "experiences" DROP COLUMN "name",
ADD COLUMN     "templateId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "schools" ALTER COLUMN "userId" SET NOT NULL;

-- CreateTable
CREATE TABLE "subjects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "subjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience_templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,

    CONSTRAINT "experience_templates_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schools" ADD CONSTRAINT "schools_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience_templates" ADD CONSTRAINT "experience_templates_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experiences" ADD CONSTRAINT "experiences_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "experience_templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
