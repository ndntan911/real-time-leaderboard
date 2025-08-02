import { Module } from '@nestjs/common';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './entities/score.entity';
import { RedisService } from '../redis/redis.service';
import { GameService } from '../game/game.service';
import { GameModule } from '../game/game.module';
import { LeaderboardGateway } from 'src/websocket/leaderboard.gateway';

@Module({
	imports: [TypeOrmModule.forFeature([Score]), GameModule],

	controllers: [ScoreController],
	providers: [ScoreService, RedisService, GameService, LeaderboardGateway],
})
export class ScoreModule {}
