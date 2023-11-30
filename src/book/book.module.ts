import { Module } from '@nestjs/common';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { BookEntity } from './book.entity';
import { BookController } from './book.controller';

@Module({
  imports: [
    AzureCosmosDbModule.forFeature([
      { collection: 'book-coll', dto: BookEntity },
    ]),
  ],
  controllers: [BookController],
})
export class BookModule {}
