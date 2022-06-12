import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  gmt_create: Date;

  @UpdateDateColumn()
  gmt_modified: Date;
}
