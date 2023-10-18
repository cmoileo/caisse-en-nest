import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { categoryService } from './category.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('category')
export class categoryController {
  constructor(private categoryService: categoryService) {}
  @ApiTags('category')
  @Post()
  createCategory(@Body() data: CategoryDto) {
    return this.categoryService.createCategory(data);
  }

  @ApiTags('category')
  @Get()
  getCategory() {
    return this.categoryService.getCategory();
  }

  @ApiTags('category')
  @Patch()
  modifyCategory(@Body() data: CategoryDto) {
    return this.categoryService.patchCategory(data);
  }

  @ApiTags('category')
  @Delete()
  deleteCategory(@Body() data: CategoryDto) {
    return this.categoryService.deleteCategory(data);
  }
}
