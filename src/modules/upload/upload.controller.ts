import {
  Controller,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { FileDto } from '../dto/create-upload.dto';
import multerConfig from './multer-config';

//[]Adicionar uma forma de apenas o usuario logado possa enviar imagem
//[] Relacionar o Usuario que estiver logado com id do produto e só assim enviar imagem
//Exemplo Afiliado-Produto: 10 -> Enviando uma imagem do produto.[]Usuario tem tem que esta logado ou autenticado
@IsPublic()
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post(':id')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async uploadFile(@UploadedFile() file: FileDto, @Param('id') id: number) {
    const result = await this.uploadService.uploadImagen(id, file);
    return result;
  }
}
