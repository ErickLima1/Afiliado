import { User } from '../entities/user.entity';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  @IsNotEmpty({ message: 'Campo Em Branco' })
  email: string;

  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo Em Branco' })
  nome: string;
}
