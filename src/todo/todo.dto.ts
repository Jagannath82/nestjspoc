import { IsNotEmpty, IsNumberString, MinLength } from 'class-validator';

export class TodoDto {
  @IsNumberString()
  @MinLength(3)
  userId: number;

  id: number;
  @IsNotEmpty()
  title: string;
  completed: boolean;
}
