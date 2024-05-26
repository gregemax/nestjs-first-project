import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    readonly name: string;
    readonly password: string;
    readonly confirmpassword: string;
    readonly email: string;
}
export declare const jwtsecert = "gregemma";
export {};
