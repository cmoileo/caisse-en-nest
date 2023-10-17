import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { categoryModule } from './category/category.module';

@Module({
  imports: [AuthModule, categoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
