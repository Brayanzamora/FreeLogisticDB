import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaeperiodovacaciones', schema)
export class PeriodoVacaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  inicio: string;

  @Column({ type: 'date' })
  fin: string;

  @Column({ default: true })
  estado: boolean;
}
