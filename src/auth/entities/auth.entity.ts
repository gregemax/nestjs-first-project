import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Auth {}

export class resetdto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class verifydto {
  @IsString()
  @IsNotEmpty()
  token: string;
}
export class updatepassworddto {
  @IsNotEmpty()
  @IsString()
  readonly newPassword: string;

  @IsNotEmpty()
  @IsString()
  readonly previousPassword: string;

  @IsNotEmpty()
  @IsString()
  readonly confirmnewPassword: string;
}
