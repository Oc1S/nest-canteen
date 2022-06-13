import { Entity, Column, BeforeInsert } from 'typeorm';
import { BaseEntity } from 'src/core/entities';
import * as bcrypt from 'bcryptjs';

@Entity('user')
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 48 })
  nickname: string;

  @Column({
    type: 'varchar',
    default: 'http://tva1.sinaimg.cn/large/006wJXbzly1h2wlqi815bj30b40b4750',
  })
  avatar: string;

  @Column('int')
  phone: number;

  @Column({
    type: 'simple-enum',
    enum: ['root', 'merchant'],
    default: 'merchant',
    select: false,
  })
  role: string;

  @Column({ type: 'varchar', length: 100, default: '' })
  email: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcrypt.hashSync(this.password);
  }
}
