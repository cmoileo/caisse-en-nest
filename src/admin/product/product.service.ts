import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    private readonly prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient()
    }

    async createProduct(data: ProductDto) {
        try {
            const createdProduct = await this.prisma.product.create({
                data: {
                    name: data.name,
                    description: data.name,
                    price: data.name,
                    categoryId: data.category_id,
                }
            })
            return createdProduct
        } catch (err) {
            return err
        }
    }
    
    async getProducts() {
        try {
            const products = await this.prisma.product.findMany()
            return products
        } catch (err) {
            return err
        }
    }

    async patchProducts(data: ProductDto) {
        try {
            const patchedProduct = await this.prisma.product.update({
                where: {
                    id: data.id
                },
                data: {
                    name: data.name,
                    description: data.description,
                    price: data.description,
                }
            })
            return patchedProduct
        } catch (err) {
            return err
        }
    }

    async deleteProducts(data: ProductDto) {
        try {
            const deletedProduct = this.prisma.product.delete({
                where: {
                    id: data.id
                }
            })
        } catch (err) {
            return err
        }
    }
}
