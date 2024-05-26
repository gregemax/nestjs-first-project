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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_auth_dto_1 = require("./dto/create-auth.dto");
const update_auth_dto_1 = require("./dto/update-auth.dto");
const user_service_1 = require("../user/user.service");
const auth_entity_1 = require("./entities/auth.entity");
const authorise_1 = require("../user/authorise");
let AuthController = class AuthController {
    constructor(authService, service) {
        this.authService = authService;
        this.service = service;
    }
    create(createAuthDto) {
        return this.authService.create(createAuthDto);
    }
    findAll(body, req) {
        try {
            const { email } = body;
            return this.authService.forgot({ email, req });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    update(id, updateAuthDto) {
        return this.authService.update(+id, updateAuthDto);
    }
    remove(id) { }
    async two(req) {
        try {
            console.log(req.user.userId);
            return await this.service.twostep(req.user.userId);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async enabletwostep(req) {
        const user = await this.service.findOne(req.user.userId);
        if (user.enablestep) {
            user.enablestep = false;
            user.secret = undefined;
            await user.save({ validateBeforeSave: false });
            return 'disable successful';
        }
        user.enablestep = true;
        user.secret = undefined;
        await user.save({ validateBeforeSave: false });
        return 'enable successful';
    }
    async verify(req, tok) {
        try {
            const { token } = tok;
            return await this.service.verifystep(req.user.userId, token);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async updatePassword(req, tok) {
        try {
            const { newPassword, previousPassword, confirmnewPassword } = tok;
            return await this.authService.updatePassword(req.user.userId, newPassword, confirmnewPassword, previousPassword);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async updateme(req, tok) {
        try {
            return await this.service.updateme(req.user.userId, tok);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.CreateAuthDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/forgottingpassord'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_entity_1.resetdto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('updateme/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_auth_dto_1.UpdateAuthDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('step'),
    (0, common_1.UseGuards)(authorise_1.Guard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "two", null);
__decorate([
    (0, common_1.Get)('enabletwostep'),
    (0, common_1.UseGuards)(authorise_1.Guard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "enabletwostep", null);
__decorate([
    (0, common_1.Post)('verifytwostep'),
    (0, common_1.UseGuards)(authorise_1.Guard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_entity_1.verifydto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verify", null);
__decorate([
    (0, common_1.Patch)('updatePassword'),
    (0, common_1.UseGuards)(authorise_1.Guard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_entity_1.updatepassworddto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Patch)('/updateme'),
    (0, common_1.UseGuards)(authorise_1.Guard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateme", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map