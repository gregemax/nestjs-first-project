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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const user_service_1 = require("../user/user.service");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(mail, service) {
        this.mail = mail;
        this.service = service;
    }
    create(createAuthDto) {
        return 'This action adds a new auth';
    }
    async forgot({ email, req }) {
        const user = await this.service.getbyemail(email);
        const ran = await crypto.randomBytes(32).toString('hex');
        const port = `${req.protocol}://${req.get('host')}/resetpassword`;
        const pass = await crypto.createHash('sha256').update(ran).digest('hex');
        user.forgotingpassword = pass;
        user.expiredforgotingpassword = Date.now() * 1000 * 60 * 10;
        await user.save({ validateBeforeSave: false });
        try {
            await this.mail.sendMail({
                from: 'emax greg',
                to: user.email,
                subject: 'reset password',
                text: `click here for rest password ${port}`,
            });
            return 'check your email to reset password';
        }
        catch (error) {
            user.forgotingpassword = undefined;
            user.expiredforgotingpassword = undefined;
            await user.save({ validateBeforeSave: false });
            return new common_1.BadRequestException('something went wrong');
        }
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
    async updatePassword(id, newPassword, confirmnewPassword, previousPassword) {
        const user = await this.service.findOne(id);
        const compare = await bcrypt.compare(previousPassword, user.password);
        if (!compare) {
            return new common_1.BadGatewayException('wrong password');
        }
        user.password = newPassword;
        user.confirmpassword = confirmnewPassword;
        await user.save();
        return 'password change successful';
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        user_service_1.UserService])
], AuthService);
//# sourceMappingURL=auth.service.js.map