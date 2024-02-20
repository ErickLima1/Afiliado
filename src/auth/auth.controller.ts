/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateAuthUserDto } from './dto/create-authUser.dto';

@IsPublic()
@ApiTags('Login-Users')
@Controller()
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiBody({
    description: 'Corpo Da Solicitação para Autenticação de Usuários',
    type: CreateAuthUserDto,
  })
  login(@Request() req: AuthRequest) {
    // console.log(req.user);

    return this.AuthService.login(req.user);
  }
}
