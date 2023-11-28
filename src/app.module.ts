import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { AuthorizationModule } from './authorization/authorization.module';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [
    TodoModule,
    AuthorizationModule,
    ConfigModule.forRoot(),
    WinstonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
