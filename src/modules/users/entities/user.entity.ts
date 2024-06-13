import { Column, Entity, OneToMany } from 'typeorm'
import { CoreEntity } from '@/utils/core/core-entity'
import { Result } from '@/modules/results/entities/result.entity'
import { GENDER_ENUM } from '@/modules/users/enums/gender.enum'

@Entity()
export class User extends CoreEntity {
  @Column()
  fullName: string

  @Column()
  description: string

  @Column()
  age: number

  @Column({ type: 'enum', enum: GENDER_ENUM })
  gender: GENDER_ENUM

  @OneToMany(() => Result, (results) => results.user, {
    cascade: true,
    eager: true,
  })
  results: Result[]
}
