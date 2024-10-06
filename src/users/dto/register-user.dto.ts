// VALIDATION for Register API

import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsEmail({}, { message: 'Enter a valid email ID' })
  email: string;

  @IsNotEmpty({ message: 'Enter a password' })
  @MinLength(6, { message: 'Password should have a minimum of 6 characters' })
  password: string;

  name: string;
}
