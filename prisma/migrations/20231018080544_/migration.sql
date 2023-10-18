/*
  Warnings:

  - Added the required column `is_admin` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "is_admin" BOOLEAN NOT NULL;
