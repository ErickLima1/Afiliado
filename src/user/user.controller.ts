// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
// import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Create-Users')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @IsPublic()
  @Post('user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiBearerAuth()
  @Get('/email')
  async findByEmail(@Query('email') email: string) {
    // console.log(email);
    return this.userService.findByEmail(email);
  }
  //Jõao Lemos Testando aqui no negocio
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }
}
