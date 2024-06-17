import { RESULT_ENUM } from '@/modules/results/enums/result.enum'
import { LEVEL_ENUM } from '@/modules/results/enums/level.enum'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateResultDto {
  @ApiProperty()
  @IsNotEmpty()
  elapsedTime: number

  @ApiProperty({ type: 'enum', enum: LEVEL_ENUM })
  @IsNotEmpty()
  level: LEVEL_ENUM

  @ApiProperty()
  @IsNumber()
  userId: number

  @ApiProperty({ type: 'enum', enum: RESULT_ENUM })
  @IsNotEmpty()
  result: RESULT_ENUM
}
