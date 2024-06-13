import { RESULT_ENUM } from '@/modules/results/enums/result.enum'
import { SCENE_ENUM } from '@/modules/results/enums/scene.enum'
import { User } from '@/modules/users/entities/user.entity'
import { CoreEntity } from '@/utils/core/core-entity'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class Result extends CoreEntity {
  @Column({ type: 'timestamp' })
  startTime: Date

  @Column({ type: 'timestamp' })
  endTime: Date

  @Column({ type: 'enum', enum: SCENE_ENUM, nullable: true })
  scene: SCENE_ENUM

  @ManyToOne(() => User, (user) => user.results)
  user: User

  @Column()
  userId: number

  @Column({ type: 'enum', enum: RESULT_ENUM, nullable: true })
  result: RESULT_ENUM
}
