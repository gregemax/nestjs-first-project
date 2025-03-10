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
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Model } from 'mongoose';
import { moviesinterface } from './entities/movies.interface';
export declare class MoviesService {
    private movies;
    constructor(movies: Model<moviesinterface>);
    create(createMovieDto: CreateMovieDto): Promise<import("mongoose").Document<unknown, {}, moviesinterface> & moviesinterface & Required<{
        _id: unknown;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, moviesinterface> & moviesinterface & Required<{
        _id: unknown;
    }>)[]>;
    findOne(id: number): Promise<(import("mongoose").Document<unknown, {}, moviesinterface> & moviesinterface & Required<{
        _id: unknown;
    }>) | NotFoundException>;
    update(id: number, updateMovieDto: UpdateMovieDto): void;
    remove(id: number): Promise<NotFoundException>;
}
