import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global configuration
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // CORS configuration
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'https://yourdomain.com'],
    credentials: true,
  });

  // API prefix
  app.setGlobalPrefix('api');

  const configService = app.get(ConfigService);
  const port = configService.get('API_GATEWAY_PORT') || 3000;

  await app.listen(port);
  console.log(`🚀 API Gateway running on port ${port}`);
}

bootstrap();