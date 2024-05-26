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
import { UserService } from './user.service';
import { CreateUserDto, logindto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/interface").userinterface> & import("./entities/interface").userinterface & Required<{
        _id: unknown;
    }>>;
    login(con: logindto): Promise<{
        user: import("mongoose").Document<unknown, {}, import("./entities/interface").userinterface> & import("./entities/interface").userinterface & Required<{
            _id: unknown;
        }>;
        token: string;
    }>;
    findAll(req: any): Promise<any[]>;
    getuserbyemail(email: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/interface").userinterface> & import("./entities/interface").userinterface & Required<{
        _id: unknown;
    }>>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(req: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/interface").userinterface> & import("./entities/interface").userinterface & Required<{
        _id: unknown;
    }>>;
}
