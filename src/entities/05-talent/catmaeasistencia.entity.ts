import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { schema } from './talent.schema';

@Entity('catmaeasistencia', schema)
export class Asistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column('time')
  inicio: number;

  @Column({ type: 'time', nullable: true })
  fin: number;

  @Column({ type: 'time', nullable: true })
  break: number;

  @Column({ type: 'time', nullable: true })
  back: number;

  @Column()
  periodo_id: number;

  @Column()
  trabajador_id: number;

  @Column({ default: true })
  flag: boolean;
}
