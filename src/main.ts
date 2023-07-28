import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig, routesConfig } from '@/common/config';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(routesConfig.swagger, app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
