import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Request,
  UseGuards,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { resetdto, updatepassworddto, verifydto } from './entities/auth.entity';
import { Guard } from 'src/user/authorise';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private service: UserService,
  ) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('/forgottingpassord')
  findAll(
    @Body() body: resetdto,
    @Request()
    req,
  ) {
    try {
      const { email } = body;
      return this.authService.forgot({ email, req });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  @Patch('updateme/:id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {}

  @Get('step')
  @UseGuards(Guard)
  async two(
    @Request()
    req,
  ) {
    try {
      console.log(req.user.userId);

      return await this.service.twostep(req.user.userId);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Get('enabletwostep')
  @UseGuards(Guard)
  async enabletwostep(
    @Request()
    req,
  ) {
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

  @Post('verifytwostep')
  @UseGuards(Guard)
  async verify(
    @Request()
    req,
    @Body()
    tok: verifydto,
  ) {
    try {
      const { token } = tok;
      return await this.service.verifystep(req.user.userId, token);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Patch('updatePassword')
  @UseGuards(Guard)
  async updatePassword(
    @Request()
    req,
    @Body()
    tok:updatepassworddto,
  ) {
    try {
      const { newPassword, previousPassword, confirmnewPassword } = tok;
      return await this.authService.updatePassword(
        req.user.userId,
        newPassword,
        confirmnewPassword,
        previousPassword,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Patch('/updateme')
  @UseGuards(Guard)
  async updateme(
    @Request()
    req,
    @Body()
    tok,
  ) {
    try {
      
      return await this.service.updateme(req.user.userId,tok);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
