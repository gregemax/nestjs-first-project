import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
  Request,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, logindto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Guard } from './authorise';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Post('login')
  async login(@Body() con: logindto) {
    try {
      return await this.userService.login(con);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Get()
  @UseGuards(Guard)
  async findAll(
    @Request()
    req,
  ) {
    console.log();

    return [this.userService.findAll(), req.user.Id];
  }

  @Post('/findbyemail/:id')
  async getuserbyemail(@Body() email: string) {
    try {
      if (!email) {
        throw new BadRequestException('please enter email ');
      }
      return await this.userService.getbyemail(email);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete()
  @UseGuards(Guard)
  async remove(
    @Req()
    req,
  ) {
    try {
      const use = await this.userService.remove(req.user.userId);
      return use;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // @Get('twostep')
  // @UseGuards(Guard)
  // async two(
  //   @Req()
  //   req,
  // ) {
  //   try {
  //     console.log(req.user.userId);

  //       return await this.userService.twostep(req.user.userId);
  //   } catch (error) {
  //     throw new BadRequestException(error.message);
  //   }
  // }


}
