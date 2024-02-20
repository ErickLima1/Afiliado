import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Afiliado } from '../entities/afiliado.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAfiliadoDto extends Afiliado {
  @IsString()
  @IsNotEmpty({ message: 'Campo Em Branco' })
  @ApiProperty({
    example: 'Televisão 4k Full HD',
    description: `Aqui Você Digita o nome do produto que você quiser !`,
  })
  nome: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Campo Em Branco' })
  @ApiProperty({
    example: 500,
    description: `Aqui Você digita o Valor do Produto, Apenas o Valor não precisa adicionar $ ou R$ !`,
  })
  valor: number;

  @IsString()
  @IsNotEmpty({ message: 'Campo Em Branco' })
  @ApiProperty({
    example: 'www.google.com',
    description: `Aqui Você Coloca o Link do produto pra você ganhar uma comissão caso alguem compre no sue link !`,
  })
  link: string;
}
