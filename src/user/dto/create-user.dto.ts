import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  @IsNotEmpty({ message: 'Campo Em Branco' })
  @ApiProperty({
    example: 'email@email.com',
    description: `O Email Sera Utilizado para você logar na sua conta !`,
  })
  email: string;

  @IsString()
  @ApiProperty({
    example: '123@abc',
    description: `A Senha Sera Utilizada para você logar na sua conta !`,
  })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo Em Branco' })
  @ApiProperty({
    example: 'Fulano de Tal',
    description: `O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir informações da pessoa conectada.`,
  })
  nome: string;
}
