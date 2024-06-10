import { CreateUserDto } from '@/modules/users/dto/create-user.dto'
import { PartialType } from '@nestjs/swagger'

export class UpdateUserDto extends PartialType(CreateUserDto) {}
