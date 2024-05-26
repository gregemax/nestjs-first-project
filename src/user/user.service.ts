import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userinterface } from './entities/interface';
import * as bcrypt from 'bcrypt';
import * as speakeasy from 'speakeasy';
import { JwtService } from '@nestjs/jwt';
import { log } from 'console';
@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private user: Model<userinterface>,
    private jwt: JwtService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.user.create(createUserDto);
  }

  findAll() {
    const secret = speakeasy.generateSecret();
    log(secret.base32);
  }

  async findOne(id: number) {
    const miles = await this.user.findById(id).select('+password');
    if (!miles) {
      throw new NotFoundException(`no user found with this id {${id}}`);
    }
    return miles;
  }
  async getbyemail(email: string) {
    const miles = await this.user.findOne({ email }).select('+password');
    if (!miles) {
      throw new NotFoundException(`no user found with this id {${email}}`);
    }
    return miles;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.user.findByIdAndDelete(id);
  }

  async login({ password, email }) {
    const user = await this.getbyemail(email);

    const lass = await bcrypt.compare(password, user.password);
    if (!lass) {
      throw new BadGatewayException('incorrect password pleace try again');
    }
    const token = this.jwt.sign({ id: user._id });
    return {
      user,
      token,
    };
  }
  async twostep(id) {
    console.log(id);

    const user = await this.findOne(id);
    console.log(user);

    if (user.enablestep) {
      const secret = speakeasy.generateSecret();
      user.secret = secret.base32;
      await user.save({ validateBeforeSave: false });
      return {
        secret: user.secret,
      };
    }
    return new NotFoundException('please enablestep verification');
  }

  async verifystep(id, token) {
    const user = await this.findOne(id);
    const verification = await speakeasy.totp.verify({
      secret: user.secret,
      encoding: 'base32',
      token: token,
    });
    if (verification) {
      return { verification };
    }
    return { verification };
  }
  async updateme(id, { email, name }) {
    let me ={ email, name}
    return await this.user.findByIdAndUpdate(
      { _id:id },
     me ,
      { runValidators: true, new: true },
    );
  }
}
