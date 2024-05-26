import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from './user/user.stratage';
import { JwtModule } from '@nestjs/jwt';
import { jwtsecert } from './user/dto/update-user.dto';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MoviesModule,
    MongooseModule.forRoot(
      'mongodb+srv://milesmoralesmyguy:ocheameh@cluster0.xgqztjj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    JwtModule.register({
      secret: jwtsecert,
      signOptions: {
        expiresIn: '2days',
      },
    }),
  ],
  providers: [],
})
export class AppModule {}
