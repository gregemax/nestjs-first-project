import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { moviesinterface } from './entities/movies.interface';

@Injectable()
export class MoviesService {
  constructor(@InjectModel('movies') private movies: Model<moviesinterface>) {}
  async create(createMovieDto: CreateMovieDto) {
    return await this.movies.create(createMovieDto);
  }

  async findAll() {
    const mov = this.movies.find();
    return await mov;
  }

  async findOne(id: number) {
    const mov = await this.movies.findById(id);
    if (!mov) {
      return new NotFoundException('no user found');
    }
    return mov;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return;
  }

  async remove(id: number) {
    const mov = await this.movies.findByIdAndDelete(id);
    if (!mov) {
      return new NotFoundException('no user found');
    }
    return;
  }
}
