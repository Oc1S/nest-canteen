import { IsNotEmpty, IsNumberString } from 'class-validator';
export class LoginDto {
  @IsNumberString()
  phone: number;
  @IsNotEmpty()
  password: string;
}
