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
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { userinterface } from './entities/interface';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private user;
    private jwt;
    constructor(user: Model<userinterface>, jwt: JwtService);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, userinterface> & userinterface & Required<{
        _id: unknown;
    }>>;
    findAll(): void;
    findOne(id: number): Promise<import("mongoose").Document<unknown, {}, userinterface> & userinterface & Required<{
        _id: unknown;
    }>>;
    getbyemail(email: string): Promise<import("mongoose").Document<unknown, {}, userinterface> & userinterface & Required<{
        _id: unknown;
    }>>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): Promise<import("mongoose").Document<unknown, {}, userinterface> & userinterface & Required<{
        _id: unknown;
    }>>;
    login({ password, email }: {
        password: any;
        email: any;
    }): Promise<{
        user: import("mongoose").Document<unknown, {}, userinterface> & userinterface & Required<{
            _id: unknown;
        }>;
        token: string;
    }>;
    twostep(id: any): Promise<NotFoundException | {
        secret: string;
    }>;
    verifystep(id: any, token: any): Promise<{
        verification: any;
    }>;
    updateme(id: any, { email, name }: {
        email: any;
        name: any;
    }): Promise<import("mongoose").Document<unknown, {}, userinterface> & userinterface & Required<{
        _id: unknown;
    }>>;
}
