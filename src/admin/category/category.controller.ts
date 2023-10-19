import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { categoryService } from './category.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@UseGuards(AuthGuard)
@Controller('category')
export class categoryController {
  constructor(private categoryService: categoryService) {}
  @ApiTags('category')
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
  @Post()
  createCategory(@Body() data: CategoryDto, file: Express.Multer.File) {
    return this.categoryService.createCategory(data, file);
  }

  @ApiTags('category')
  @Get()
  getCategory() {
    return this.categoryService.getCategory();
  }

  @ApiTags('category')
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
  modifyCategory(@Body() data: CategoryDto, file: Express.Multer.File) {
    return this.categoryService.patchCategory(data, file);
  }

  @ApiTags('category')
  @Delete()
  deleteCategory(@Body() data: CategoryDto) {
    return this.categoryService.deleteCategory(data);
  }
}
