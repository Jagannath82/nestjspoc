import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import * as path from 'path';

import { AppModule } from './app.module';
import { ServiceName, SWAGGER_CONFIG } from './swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, SWAGGER_CONFIG);
  const outputDir = path.resolve(process.cwd(), 'swagger');

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }
  const outputPath = path.resolve(outputDir, `${ServiceName}.json`);

  writeFileSync(outputPath, JSON.stringify(document), { encoding: 'utf8' });

  await app.close();
}
bootstrap();