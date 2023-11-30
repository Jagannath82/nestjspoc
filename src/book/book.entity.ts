import { CosmosPartitionKey } from '@nestjs/azure-database';

@CosmosPartitionKey('author')
export class BookEntity {
  id: string;
  author: string;
  bookName: string;
}
