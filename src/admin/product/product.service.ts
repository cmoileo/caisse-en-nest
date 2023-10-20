import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProductDto } from './dto/product.dto';
import { ProductCreateInput } from '../../../prisma/prisma-custom-types';

@Injectable()
export class ProductService {
  private readonly prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createProduct(data: ProductDto, file: Express.Multer.File) {
    console.log(data);

    const parsedCatId =
      typeof data.categoryId === 'string'
        ? parseInt(data.categoryId)
        : data.categoryId;
    try {
      const createdProduct = await this.prisma.product.create({
        data: {
          name: data.name,
          description: data.description,
          price: data.price,
          categoryId: parsedCatId,
          imageUrl: `/images/${file.filename}`,
        } as ProductCreateInput,
      });
      return createdProduct;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async getProducts() {
    try {
      const products = await this.prisma.product.findMany();
      return products;
    } catch (err) {
      return err;
    }
  }

  async patchProducts(data: ProductDto, file: Express.Multer.File) {
    const parsedCatId =
      typeof data.categoryId === 'string'
        ? parseInt(data.categoryId)
        : data.categoryId;
    try {
      const patchedProduct = await this.prisma.product.update({
        where: {
          id: data.id,
        },
        data: {
          name: data.name,
          description: data.description,
          price: data.description,
          categoryId: parsedCatId,
          imageUrl: `/images/${file.filename}`,
        },
      });
      return patchedProduct;
    } catch (err) {
      return err;
    }
  }

  async deleteProducts(data: ProductDto) {
    try {
      const deletedProduct = this.prisma.product.delete({
        where: {
          id: data.id,
        },
      });
    } catch (err) {
      return err;
    }
  }
}
