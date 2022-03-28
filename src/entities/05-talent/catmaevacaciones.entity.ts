import { Entity, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaevacaciones', schema)
export class Vacaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  comentario: string;

  @Column({ type: 'int', nullable: true, default: 0 })
  diasvacaciones: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  diaspendiente: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  diasexpirado: number;

  @Column()
  trabajador_id: number;

  @Column()
  periodo_vacaciones_id: number;

  @Column({ default: true })
  flag: boolean;
}
