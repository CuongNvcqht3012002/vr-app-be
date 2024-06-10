import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '@/modules/users/entities/user.entity'
import { CoreService } from 'src/utils/core/core-service'

@Injectable()
export class UsersService extends CoreService<User> {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {
    super(usersRepository)
  }
}
