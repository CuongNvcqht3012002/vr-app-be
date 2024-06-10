import { CreateResultDto } from '@/modules/results/dto/create-result.dto'
import { ResultsService } from '@/modules/results/service'
import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Results')
@Controller('results')
export class ResultsController {
  constructor(private readonly service: ResultsService) {}

  @ApiOperation({ summary: 'Create  result' })
  @Post()
  create(@Body() createResultDto: CreateResultDto) {
    return this.service.create(createResultDto)
  }
}
