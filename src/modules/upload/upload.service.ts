import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileDto } from '../dto/create-upload.dto';

@Injectable()
export class UploadService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadImagen(id: number, image: FileDto) {
    const afiliado = await this.prisma.afiliado.findUnique({ where: { id } });

    if (!afiliado) {
      throw new Error(`Produto afiliado com ID ${id} não encontrado.`);
    }

    // Adicione o caminho da imagem à matriz de imagens do afiliado
    const uploadImagem = await this.prisma.afiliado.update({
      where: { id },
      data: {
        imagens: {
          push: image.filename,
        },
      },
    });

    return uploadImagem;
  }
}
