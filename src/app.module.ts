import { Module } from '@nestjs/common';
import { ListService } from './list/list.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ListService],
})
export class AppModule {}
