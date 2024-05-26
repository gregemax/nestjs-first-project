"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const speakeasy = require("speakeasy");
const jwt_1 = require("@nestjs/jwt");
const console_1 = require("console");
let UserService = class UserService {
    constructor(user, jwt) {
        this.user = user;
        this.jwt = jwt;
    }
    async create(createUserDto) {
        return await this.user.create(createUserDto);
    }
    findAll() {
        const secret = speakeasy.generateSecret();
        (0, console_1.log)(secret.base32);
    }
    async findOne(id) {
        const miles = await this.user.findById(id).select('+password');
        if (!miles) {
            throw new common_1.NotFoundException(`no user found with this id {${id}}`);
        }
        return miles;
    }
    async getbyemail(email) {
        const miles = await this.user.findOne({ email }).select('+password');
        if (!miles) {
            throw new common_1.NotFoundException(`no user found with this id {${email}}`);
        }
        return miles;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    async remove(id) {
        return await this.user.findByIdAndDelete(id);
    }
    async login({ password, email }) {
        const user = await this.getbyemail(email);
        const lass = await bcrypt.compare(password, user.password);
        if (!lass) {
            throw new common_1.BadGatewayException('incorrect password pleace try again');
        }
        const token = this.jwt.sign({ id: user._id });
        return {
            user,
            token,
        };
    }
    async twostep(id) {
        console.log(id);
        const user = await this.findOne(id);
        console.log(user);
        if (user.enablestep) {
            const secret = speakeasy.generateSecret();
            user.secret = secret.base32;
            await user.save({ validateBeforeSave: false });
            return {
                secret: user.secret,
            };
        }
        return new common_1.NotFoundException('please enablestep verification');
    }
    async verifystep(id, token) {
        const user = await this.findOne(id);
        const verification = await speakeasy.totp.verify({
            secret: user.secret,
            encoding: 'base32',
            token: token,
        });
        if (verification) {
            return { verification };
        }
        return { verification };
    }
    async updateme(id, { email, name }) {
        let me = { email, name };
        return await this.user.findByIdAndUpdate({ _id: id }, me, { runValidators: true, new: true });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map