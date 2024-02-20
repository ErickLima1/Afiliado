import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { User } from './user/entities/user.entity';
import { IsPublic } from './auth/decorators/is-public.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiBearerAuth()
  @Get('me')
  getMe(@CurrentUser() user: User) {
    return user;
  }
}
