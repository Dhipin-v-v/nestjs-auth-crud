import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import {} from '../users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(
    email: string,
    password: string,
  ): Promise<{ success: boolean; accessToken: string }> {
    const user = await this.userService.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Bad credentials');
    }
    const payload = { name: user.name, email: user.email, roles: user.roles };
    const accessToken = this.jwtService.sign(payload);
    return {
      success: true,
      accessToken,
    };
  }
}
