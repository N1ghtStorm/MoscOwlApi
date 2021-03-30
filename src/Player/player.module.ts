import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PlayerController],
  // providers: [AppService],
})
export class PlayerModule {}
