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
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(createMovieDto: CreateMovieDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/movies.interface").moviesinterface> & import("./entities/movies.interface").moviesinterface & Required<{
        _id: unknown;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/movies.interface").moviesinterface> & import("./entities/movies.interface").moviesinterface & Required<{
        _id: unknown;
    }>)[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/movies.interface").moviesinterface> & import("./entities/movies.interface").moviesinterface & Required<{
        _id: unknown;
    }>) | import("@nestjs/common").NotFoundException>;
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<void>;
    remove(id: string): Promise<import("@nestjs/common").NotFoundException>;
}
