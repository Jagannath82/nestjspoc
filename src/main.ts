import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SWAGGER_CONFIG } from './swagger.config';
import { SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import { WINSTON_LOGGER_INSTANCE } from './winston.config';
//import { ValidationPipe } from '@nestjs/common';



async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({ instance: WINSTON_LOGGER_INSTANCE }),
  });
  app.enableCors();
  const document = SwaggerModule.createDocument(app, SWAGGER_CONFIG);
  SwaggerModule.setup('root', app, document);
  //app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
