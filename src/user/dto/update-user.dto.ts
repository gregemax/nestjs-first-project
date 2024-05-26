import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly name: string;
  readonly password: string;
  readonly confirmpassword: string;

  @IsEmail()
  readonly email: string;
}

export const  jwtsecert='gregemma'