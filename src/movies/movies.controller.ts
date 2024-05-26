import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadGatewayException,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    try {
      return await this.moviesService.create(createMovieDto);
    } catch (error) {
      throw new BadGatewayException(error.message);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.moviesService.findAll();
    } catch (error) {
      throw new BadGatewayException(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.moviesService.findOne(+id);
    } catch (error) {
      throw new BadGatewayException(error.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.moviesService.remove(+id);
    } catch (error) {
      throw new BadGatewayException(error.message);
    }
  }
}
