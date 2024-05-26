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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MoviesService = class MoviesService {
    constructor(movies) {
        this.movies = movies;
    }
    async create(createMovieDto) {
        return await this.movies.create(createMovieDto);
    }
    async findAll() {
        const mov = this.movies.find();
        return await mov;
    }
    async findOne(id) {
        const mov = await this.movies.findById(id);
        if (!mov) {
            return new common_1.NotFoundException('no user found');
        }
        return mov;
    }
    update(id, updateMovieDto) {
        return;
    }
    async remove(id) {
        const mov = await this.movies.findByIdAndDelete(id);
        if (!mov) {
            return new common_1.NotFoundException('no user found');
        }
        return;
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('movies')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MoviesService);
//# sourceMappingURL=movies.service.js.map