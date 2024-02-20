/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
  Put,
} from '@nestjs/common';
import { AfiliadoService } from './afiliado.service';
import { CreateAfiliadoDto } from './dto/create-afiliado.dto';
import { UpdateAfiliadoDto } from './dto/update-afiliado.dto';
import { AuthRequest } from 'src/auth/models/AuthRequest';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Afiliado-Product')
@Controller('afiliado')
export class AfiliadoController {
  constructor(private readonly afiliadoService: AfiliadoService) {}

  @Post()
  create(@Body() createAfiliadoDto: CreateAfiliadoDto, @Request() req: AuthRequest) {
    return this.afiliadoService.create(createAfiliadoDto, req.user.id);
  }
  
  @Put(':id')
  @ApiBody({
    description: 'Atualiza o Produto, Valor ou Link !.',
    type: CreateAfiliadoDto,
  })
  update(@Param('id') id: string, @Body() updateAfiliadoDto: UpdateAfiliadoDto,  
    @Request() req: AuthRequest) {
    return this.afiliadoService.update(+id, updateAfiliadoDto, req.user.id);
  }

  @Get()
  findAll(@Request() req: AuthRequest) {
    return this.afiliadoService.findAll(req.user.id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.afiliadoService.findOne(+id);
  // }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req: AuthRequest) {
    return this.afiliadoService.remove(+id, req.user.id);
  }
}
