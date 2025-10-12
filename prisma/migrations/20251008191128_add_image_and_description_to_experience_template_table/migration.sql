/*
  Warnings:

  - Added the required column `ImageUrl` to the `experience_templates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `experience_templates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "experience_templates" ADD COLUMN     "ImageUrl" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
