import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.use('/images', express.static(join(__dirname, '..', 'images')))
  const config = new DocumentBuilder()
    .setTitle('Caisse en Nest')
    .setDescription('Borne de grec')
    .setVersion('1.0')
    .addTag('admin')
    .addTag('category')
    .addTag('menu')
    .addTag('product')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
}

