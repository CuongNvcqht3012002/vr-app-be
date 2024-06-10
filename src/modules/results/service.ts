import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CoreService } from 'src/utils/core/core-service'
import { Result } from '@/modules/results/entities/result.entity'

@Injectable()
export class ResultsService extends CoreService<Result> {
  constructor(
    @InjectRepository(Result)
    private resultRepo: Repository<Result>
  ) {
    super(resultRepo)
  }
}
