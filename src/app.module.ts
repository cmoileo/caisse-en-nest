import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './admin/auth/auth.module';
import { categoryModule } from './admin/category/category.module';
import { ProductController } from './admin/product/product.controller';
import { ProductService } from './admin/product/product.service';
import { ProductModule } from './admin/product/product.module';
import { MenuModule } from './admin/menu/menu.module';
import { UserAuthModule } from './user/user-auth/user-auth.module';

@Module({
  imports: [AuthModule, categoryModule, ProductModule, MenuModule, UserAuthModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
