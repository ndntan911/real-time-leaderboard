import { Module } from '@nestjs/common';
import { LeaderboardGateway } from './leaderboard.gateway';
import { MessageGateway } from './message.gateway';

@Module({
	providers: [LeaderboardGateway, MessageGateway],
	exports: [LeaderboardGateway, MessageGateway],
})
export class WebSocketModule {}
