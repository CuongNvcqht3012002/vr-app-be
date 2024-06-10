import { GENDER_ENUM } from '@/modules/users/enums/gender.enum'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Họ và tên không được để trống' })
  fullName: string

  @ApiProperty({ type: 'number' })
  @IsNotEmpty({ message: 'Tuổi không được để trống' })
  age: number

  @ApiProperty({ type: 'enum', enum: GENDER_ENUM })
  @IsNotEmpty({ message: 'Giới tính không được để trống' })
  gender: GENDER_ENUM

  @ApiProperty()
  @IsNotEmpty({ message: 'Miêu tả cơ bản' })
  description: string
}
