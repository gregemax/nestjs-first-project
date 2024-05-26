import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { UserService } from 'src/user/user.service';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { log } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private mail: MailerService,
    private service: UserService,
  ) {}
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  async forgot({ email, req }) {
    const user = await this.service.getbyemail(email);
    const ran = await crypto.randomBytes(32).toString('hex');
    const port = `${req.protocol}://${req.get('host')}/resetpassword`;
    const pass = await crypto.createHash('sha256').update(ran).digest('hex');
    user.forgotingpassword = pass;
    user.expiredforgotingpassword = Date.now() * 1000 * 60 * 10;
    await user.save({ validateBeforeSave: false });
    try {
      await this.mail.sendMail({
        from: 'emax greg',
        to: user.email,
        subject: 'reset password',
        text: `click here for rest password ${port}`,
      });
      return 'check your email to reset password';
    } catch (error) {
      user.forgotingpassword = undefined;
      user.expiredforgotingpassword = undefined;
      await user.save({ validateBeforeSave: false });
      return new BadRequestException('something went wrong');
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async updatePassword(id, newPassword, confirmnewPassword,previousPassword) {
    const user = await this.service.findOne(id)
    const compare = await bcrypt.compare(previousPassword, user.password);
    if (!compare) {
      return new BadGatewayException('wrong password');
    }
    user.password = newPassword
    user.confirmpassword = confirmnewPassword
    await user.save()
    return 'password change successful'
  }
}