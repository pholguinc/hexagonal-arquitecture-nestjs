import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {

  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

   app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

      const config = new DocumentBuilder()
        .setTitle('API POS VENTA CON ARQUITECTURA HEXAGONAL')
        .setDescription('API POS VENTAS - YAPE, PLIN Y FACTURACION ELECTRONICA SUNAT PERU')
        .setVersion('1.0')
        .build();
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('docs', app, document);
    app.enableCors();
    await app.listen(3000);
    logger.log(`App running on port 3000`);
}
bootstrap();
