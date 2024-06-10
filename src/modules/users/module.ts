import { Module } from '@nestjs/common'
import { User } from '@/modules/users/entities/user.entity'
import { UsersController } from '@/modules/users/controller'
import { UsersService } from '@/modules/users/service'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
