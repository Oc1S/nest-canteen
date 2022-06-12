import { IsBooleanString, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateOrderDto {
  @IsNumberString({ message: '价格应为数字字符串' })
  price: number;

  // @IsDateString()
  // @IsDate()
  // schedule: Date;

  @IsNotEmpty()
  desc: string;

  @IsBooleanString()
  isDone: boolean;
}
