import { InjectModel } from '@nestjs/azure-database';
import { Controller, Get } from '@nestjs/common';
import { BookEntity } from './book.entity';
import { Container } from '@azure/cosmos';
import { IBookDto } from './book.dto';

@Controller('book')
export class BookController {
  constructor(
    @InjectModel(BookEntity) private readonly bookContainer: Container,
  ) {}

  @Get()
  async fetchAllBooks() {
    const sqlQuery = 'select * from c';

    const consmosResults = await this.bookContainer?.items
      ?.query<BookEntity>(sqlQuery)
      .fetchAll();

    const response = consmosResults.resources.map<IBookDto>((value) => {
      return {
        id: value.id,
        author: value.author,
        bookName: value.bookName,
      };
    });
    return response;
  }
}
