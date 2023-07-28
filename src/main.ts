import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { routesConfig } from '@/config/routes';
import { swaggerConfig } from '@/config/swagger';
import { SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(routesConfig.swagger, app, document);

  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
