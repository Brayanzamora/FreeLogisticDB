import { Entity, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaeperiodo', schema)
export class Periodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  inicio: string;

  @Column({ type: 'timestamp' })
  fin: string;

  @Column({ nullable: true })
  estado?: boolean;

  @Column({ default: true })
  flag: boolean;
}
