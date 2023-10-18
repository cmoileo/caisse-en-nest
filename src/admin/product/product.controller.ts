import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiTags('product')
  @Post()
  createProduct(@Body() data: ProductDto) {
    return this.productService.createProduct(data);
  }

  @ApiTags('product')
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @ApiTags('product')
  @Patch()
  patchProduct(@Body() data: ProductDto) {
    return this.productService.patchProducts(data);
  }

  @ApiTags('product')
  @Delete()
  deleteProduct(@Body() data: ProductDto) {
    return this.productService.deleteProducts(data);
  }
}
