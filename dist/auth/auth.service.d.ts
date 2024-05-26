import { BadGatewayException, BadRequestException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private mail;
    private service;
    constructor(mail: MailerService, service: UserService);
    create(createAuthDto: CreateAuthDto): string;
    forgot({ email, req }: {
        email: any;
        req: any;
    }): Promise<"check your email to reset password" | BadRequestException>;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
    updatePassword(id: any, newPassword: any, confirmnewPassword: any, previousPassword: any): Promise<BadGatewayException | "password change successful">;
}
