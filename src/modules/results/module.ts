import { ResultsController } from '@/modules/results/controller'
import { Result } from '@/modules/results/entities/result.entity'
import { ResultsService } from '@/modules/results/service'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Result])],
  controllers: [ResultsController],
  providers: [ResultsService],
  exports: [ResultsService],
})
export class ResultsModule {}
