import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { authConstants } from './auth.constants';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
//Добавляем стратегию работы с jwt
import { JWTStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: authConstants.secret,
      signOptions: {
        // 1.
        expiresIn: '1d',
      },
    }),
    PassportModule,
  ],
  providers: [AuthService, JWTStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
