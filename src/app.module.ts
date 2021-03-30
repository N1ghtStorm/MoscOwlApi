import { PlayerModule } from './Player/player.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PlayerModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
