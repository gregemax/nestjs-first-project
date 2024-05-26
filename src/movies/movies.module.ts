import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie } from './entities/movie.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:'movies',schema:Movie}])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
