import * as dotenv from 'dotenv';
dotenv.config();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('DB PASSWORD:', process.env.DATABASE_PASSWORD);
  console.log('DB USER:', process.env.DATABASE_USER);
  console.log('DB HOST:', process.env.DATABASE_HOST);
  console.log('JWT SECRET =>', process.env.JWT_SECRET);
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT || 3000);
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
}
bootstrap();
