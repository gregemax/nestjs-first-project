import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userschema } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtsecert } from './dto/update-user.dto';
import { JwtStrategy } from './user.stratage';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'user', schema: userschema }]),
    JwtModule.register({
      secret: jwtsecert,
      signOptions: {
        expiresIn: '2days',
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
  exports: [UserService],
})
export class UserModule {} 
