import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getHello(@Query('userId', ParseIntPipe) userId: number) {
    return this.todoService.getTodos(userId);
  }
}
