import { IsEmail, IsString } from 'class-validator';

export class LoginRequestBody {
  @IsEmail(
    {},
    { message: 'O campo de e-mail deve ser um endereço de e-mail válido' },
  )
  email: string;

  @IsString()
  password: string;
}
