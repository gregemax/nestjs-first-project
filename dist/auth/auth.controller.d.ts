/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { resetdto, updatepassworddto, verifydto } from './entities/auth.entity';
export declare class AuthController {
    private authService;
    private service;
    constructor(authService: AuthService, service: UserService);
    create(createAuthDto: CreateAuthDto): string;
    findAll(body: resetdto, req: any): Promise<"check your email to reset password" | BadRequestException>;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): void;
    two(req: any): Promise<NotFoundException | {
        secret: string;
    }>;
    enabletwostep(req: any): Promise<"disable successful" | "enable successful">;
    verify(req: any, tok: verifydto): Promise<{
        verification: any;
    }>;
    updatePassword(req: any, tok: updatepassworddto): Promise<import("@nestjs/common").BadGatewayException | "password change successful">;
    updateme(req: any, tok: any): Promise<import("mongoose").Document<unknown, {}, import("../user/entities/interface").userinterface> & import("../user/entities/interface").userinterface & Required<{
        _id: unknown;
    }>>;
}
