import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'milesmoralesmyguy@gmail.com',
          pass: 'wqlopbzqxvzcryos',
        },
      },
    }),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
