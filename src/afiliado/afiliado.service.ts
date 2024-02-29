/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAfiliadoDto } from './dto/create-afiliado.dto';
import { UpdateAfiliadoDto } from './dto/update-afiliado.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AfiliadoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(afiliadoDto: CreateAfiliadoDto, usuarioAdmId: number) {
    const createdAfiliado = await this.prisma.afiliado.create({
      data: {
        ...afiliadoDto,
        usuarioAdm: {
          connect: {
            id: usuarioAdmId,
          },
        },
      } as any,
    });
    return createdAfiliado;
  }

  // eslint-disable-next-line prettier/prettier
  async update(id: number, afiliadoDto: UpdateAfiliadoDto, usuarioAdmId: number) {
    const afiliado = await this.prisma.afiliado.findUnique({
      where: { id },
      select: { usuarioAdm: true },
    });

    if (!afiliado || afiliado.usuarioAdm.id !== usuarioAdmId) {
      throw new HttpException(
        'Produto não encontrado ou não autorizado',
        HttpStatus.NOT_FOUND,
      );
    }

    const updatedAfiliado = await this.prisma.afiliado.update({
      where: { id },
      data: afiliadoDto,
    });

    return updatedAfiliado;
  }

  async findAll(usuarioAdmId: number) {
    const allAfiliado = await this.prisma.afiliado.findMany({
      where: {
        usuarioAdm: {
          id: usuarioAdmId,
        },
      },
    });

    return allAfiliado;
  }

  // //[] Fazer parte de Buscar um Produto Especifico
  // findOne(id: number) {
  //   return `This action returns a #${id} afiliado`;
  // }

  async remove(id: number, usuarioAdmId: number) {
    const afiliado = await this.prisma.afiliado.findUnique({
      where: { id },
      select: { usuarioAdm: true },
    });

    if (!afiliado || afiliado.usuarioAdm.id !== usuarioAdmId) {
      throw new HttpException(
        'Produto Não Encontrado ou Não Autorizado',
        HttpStatus.UNAUTHORIZED,
      );
    }

    await this.prisma.afiliado.delete({
      where: { id },
    });

    return { message: 'Produto Deletado !' };
  }
}
