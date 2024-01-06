import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getHello(@Query('userId', ParseIntPipe) userId: number) {
    return this.todoService.getTodos(userId);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  sendHello(@Body() todoDto: TodoDto) {
    return todoDto; 
  }
}
