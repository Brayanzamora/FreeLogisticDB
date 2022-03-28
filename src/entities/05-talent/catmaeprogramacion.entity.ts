import { PrimaryGeneratedColumn, Entity, Column, Unique } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaeprogramacion', schema)
export class Programacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'time' })
  inicio: string;

  @Column({ type: 'time' })
  fin: string;

  @Column({ default: false })
  horariorotativo: boolean;

  @Column()
  trabajador_id: number;

  @Column()
  validacion_id: number;

  @Column({ default: true })
  flag: boolean;
}
