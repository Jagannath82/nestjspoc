import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ITodo } from './models/ITodo';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

const log: Logger = new Logger('TodoService');

@Injectable()
export class TodoService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}
  async getTodos(userId: number) {
    const { data } = await this.httpService.axiosRef.get(
      this.configService.get('TODO_URI'),
    );
    const response: ITodo[] = data as ITodo[];
    const newResponse = response.filter((todo) => {
      return todo.userId === userId;
    });
    log.log(`Todo response ${JSON.stringify(newResponse)}`);
    newResponse.push({
      userId: 2,
      id: 44,
      title: 'jagan',
      completed: true,
    });
    newResponse.sort((a: ITodo, b: ITodo) => a.title.localeCompare(b.title));
    newResponse.shift();
    newResponse.unshift({
      userId: 2,
      id: 45,
      title: 'Anusha',
      completed: true,
    });
    return newResponse;
  }
}
