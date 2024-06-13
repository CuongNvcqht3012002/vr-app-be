import { RESULT_ENUM } from '@/modules/results/enums/result.enum'
import { SCENE_ENUM } from '@/modules/results/enums/scene.enum'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateResultDto {
  @ApiProperty()
  @IsNotEmpty()
  startTime: Date

  @ApiProperty()
  @IsNotEmpty()
  endTime: Date

  @ApiProperty({ type: 'enum', enum: SCENE_ENUM })
  @IsNotEmpty()
  scene: SCENE_ENUM

  @ApiProperty()
  @IsNumber()
  userId: number

  @ApiProperty({ type: 'enum', enum: RESULT_ENUM })
  @IsNotEmpty()
  result: RESULT_ENUM
}
