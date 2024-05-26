"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const movies_module_1 = require("./movies/movies.module");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const update_user_dto_1 = require("./user/dto/update-user.dto");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            movies_module_1.MoviesModule,
            mongoose_1.MongooseModule.forRoot('mongodb+srv://milesmoralesmyguy:ocheameh@cluster0.xgqztjj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
            jwt_1.JwtModule.register({
                secret: update_user_dto_1.jwtsecert,
                signOptions: {
                    expiresIn: '2days',
                },
            }),
        ],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map