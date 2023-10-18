import { Body, Controller, Delete, Get, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { AuthGuard } from '../auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path, { extname } from 'path';

// @UseGuards(AuthGuard)
@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './dist/images',
            filename: (req, file, cb) => {
              const fileExt = extname(file.originalname); 
              const uniqueSuffix = Date.now();
              const newFileName = `${uniqueSuffix}${fileExt}`;
              cb(null, newFileName);
            }
          })
    }))
    createProduct(@Body() data:ProductDto, @UploadedFile() file: Express.Multer.File) {
        return this.productService.createProduct(data, file);
    }

    @Get()
    getProducts() {
        return this.productService.getProducts()
    }

    @Patch()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './dist/images',
            filename: (req, file, cb) => {
              const fileExt = extname(file.originalname); 
              const uniqueSuffix = Date.now();
              const newFileName = `${uniqueSuffix}${fileExt}`;
              cb(null, newFileName);
            }
          })
    }))
    patchProduct(@Body() data:ProductDto, @UploadedFile() file: Express.Multer.File) {
        return this.productService.patchProducts(data, file)
    }

    @Delete()
    deleteProduct(@Body() data:ProductDto) {
        return this.productService.deleteProducts(data)
    }
}
