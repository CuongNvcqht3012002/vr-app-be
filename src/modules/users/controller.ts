import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { UsersService } from '@/modules/users/service'
import { CreateUserDto } from '@/modules/users/dto/create-user.dto'
import { UpdateUserDto } from '@/modules/users/dto/update-user.dto'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.service.create(dto)
  }

  @ApiOperation({ summary: 'Update user' })
  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() dto: UpdateUserDto) {
    return this.service.update(id, dto)
  }

  @ApiOperation({ summary: 'Get detail user and results' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne({ id }, false, ['results'])
  }
}
