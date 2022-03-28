import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaehorario', schema)
export class Horario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'time' })
  inicio: string;

  @Column({ type: 'time' })
  fin: string;

  @Column({ default: true })
  flag: boolean;
}
