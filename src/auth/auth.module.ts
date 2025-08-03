import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { RedisService } from '../redis/redis.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JWTAuthGuard } from './guards/auth.guard';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
	imports: [
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: process.env.ACCESSTOKEN_LIFETIME },
		}),
		TypeOrmModule.forFeature([User]),
		UserModule,
		PassportModule,
	],
	controllers: [AuthController],
	providers: [AuthService, JwtService, RedisService, JwtStrategy, JWTAuthGuard],
})
export class AuthModule {}
