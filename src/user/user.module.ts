import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisService } from '../redis/redis.service';
import { FriendRequest } from './entities/friend-request.entity';
import { Message } from './entities/message.entity';
import { MessageGateway } from 'src/websocket/message.gateway';
import { RedisModule } from 'src/redis/redis.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([User, FriendRequest, Message]),
		RedisModule,
	],
	controllers: [UserController],
	providers: [UserService, RedisService, MessageGateway],
	exports: [UserService],
})
export class UserModule {}
