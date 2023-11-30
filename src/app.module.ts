import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { AuthorizationModule } from './authorization/authorization.module';
import { WinstonModule } from 'nest-winston';
import { KafkaModule } from './kafka/kafka.module';
// import { BookModule } from './book/book.module';
// import { AzureCosmosDbModule } from '@nestjs/azure-database';

@Module({
  imports: [
    TodoModule,
    AuthorizationModule,
    ConfigModule.forRoot(),
    WinstonModule,
    KafkaModule,
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
