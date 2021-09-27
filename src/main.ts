import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add Swagger fo documentation
  const config = new DocumentBuilder()
    .setTitle('Crypto Investment Server API')
    .setDescription('가상화폐 투자 서버 API')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Add ValidationPipe globally
  app.useGlobalPipes(new ValidationPipe());

  // Run server at 3000
  await app.listen(3000);
}
bootstrap();
