import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.register(
      registerUserDto.name,
      registerUserDto.email,
      registerUserDto.password,
    );
  }
}
