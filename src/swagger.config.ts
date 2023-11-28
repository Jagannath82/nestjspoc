import { DocumentBuilder } from '@nestjs/swagger';

export const ServiceName = 'cb-todo-service';
export const SWAGGER_CONFIG = new DocumentBuilder()
  .setTitle('Crystal Blue Platform Spirit loyalty Service API Template')
  .setDescription(
    'This service is responsible for dealing with the Spirit loyalty service for Crystal blue Platform',
  )
  .setVersion('1.0')
  .addTag(ServiceName)
  .build();
