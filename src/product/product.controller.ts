import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    createProduct(@Body() data: ProductDto) {
        return this.productService.createProduct(data)
    }

    @Get()
    getProducts() {
        return this.productService.getProducts()
    }

    @Patch()
    patchProduct(@Body() data:ProductDto) {
        return this.productService.patchProducts(data)
    }

    @Delete()
    deleteProduct(@Body() data:ProductDto) {
        return this.productService.deleteProducts(data)
    }
}
