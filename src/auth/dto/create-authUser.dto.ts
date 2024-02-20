import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateAuthUserDto extends User {
  @IsEmail()
  @ApiProperty({
    example: 'digiteOseuEmail@gmail.com',
    description: `Digite o Email que você criou a conta pra efetuar o Login !`,
  })
  email: string;

  @IsString()
  @ApiProperty({
    example: 'SuaSenha@abc',
    description: `A Senha Sera Utilizada para você logar na sua conta !`,
  })
  password: string;
}
