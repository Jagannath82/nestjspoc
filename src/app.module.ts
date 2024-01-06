import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { AuthorizationModule } from './authorization/authorization.module';
import { WinstonModule } from 'nest-winston';
import { KafkaModule } from './kafka/kafka.module';
import { DatabaseModule } from './database/database.module';
// import { BookModule } from './book/book.module';
// import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { PhotoModule } from './photo/photo.module';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';

@Module({
  imports: [
    TodoModule,
    AuthorizationModule,
    ConfigModule.forRoot(),
    WinstonModule,
    //KafkaModule,
    DatabaseModule,
    PhotoModule,
    HealthModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'myuser',
      password: 'secret',
      database: 'mydatabase',
      entities: [Photo],
      synchronize: true,
    }),
    // BookModule,
    // AzureCosmosDbModule.forRoot({
    //   dbName: 'test-db',
    //   endpoint: 'https://jb-test-keyrotate-cosmosdb.documents.azure.com:443/',
    //   key: '',
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
