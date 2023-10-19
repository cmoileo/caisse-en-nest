/*
  Warnings:

  - You are about to drop the column `imageId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_imageId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageId";

-- DropTable
DROP TABLE "Image";
