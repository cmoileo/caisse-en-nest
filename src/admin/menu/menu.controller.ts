import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuDto } from './Dto/menu.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@UseGuards(AuthGuard)
@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}
  
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './dist/images',
        filename: (req, file, cb) => {
          const fileExt = extname(file.originalname); 
          const uniqueSuffix = Date.now();
          const newFileName = `${uniqueSuffix}${fileExt}`;
          cb(null, newFileName);
        },
      }),
    }),
  )
  createMenu(@Body() data: MenuDto, @UploadedFile() file: Express.Multer.File) {
    return this.menuService.createMenu(data, file);
  }

  @ApiTags('menu')
  @Get()
  getMenus() {
    return this.menuService.getMenu();
  }

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
  @ApiTags('menu')
  @Patch()
  patchMenu(@Body() data: MenuDto) {
    return this.menuService.patchMenu(data);
  }

  @ApiTags('menu')
  @Delete()
  deleteMenu(@Body() data: MenuDto) {
    return this.menuService.deleteMenu(data);
  }
}

