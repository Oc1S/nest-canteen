import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/core/entities';

@Entity('order')
export class Order extends BaseEntity {
  @Column('decimal')
  price: number;

  @Column()
  desc: string;

  /* @Column()
  schedule: Date; */

  @Column({ default: false })
  isDone: boolean;
}
