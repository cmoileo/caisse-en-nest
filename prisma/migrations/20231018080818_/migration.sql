/*
  Warnings:

  - You are about to drop the column `is_admin` on the `Category` table. All the data in the column will be lost.
  - Added the required column `is_admin` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "is_admin" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "is_admin";
