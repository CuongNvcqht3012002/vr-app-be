import { RESULT_ENUM } from '@/modules/results/enums/result.enum'
import { LEVEL_ENUM } from '@/modules/results/enums/level.enum'
import { User } from '@/modules/users/entities/user.entity'
import { CoreEntity } from '@/utils/core/core-entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class Result extends CoreEntity {
  @Column({ nullable: true, type: 'float' })
  elapsedTime: number

  @Column({ type: 'enum', enum: LEVEL_ENUM, nullable: true })
  level: LEVEL_ENUM

  @ManyToOne(() => User, (user) => user.results)
  user: User

  @Column()
  userId: number

  @Column({ type: 'enum', enum: RESULT_ENUM, nullable: true })
  result: RESULT_ENUM
}
