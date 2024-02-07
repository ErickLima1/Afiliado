import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Afiliado } from '../entities/afiliado.entity';

export class CreateAfiliadoDto extends Afiliado {
  @IsString()
  @IsNotEmpty({ message: 'Campo Em Branco' })
  nome: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Campo Em Branco' })
  valor: number;

  @IsString()
  @IsNotEmpty({ message: 'Campo Em Branco' })
  link: string;
}
