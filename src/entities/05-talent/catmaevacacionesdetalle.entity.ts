import { Entity, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaevacacionesdetalle', schema)
export class VacacionesDetalle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fechasolicitud: string;

  @Column({ type: 'timestamp' })
  inicio: Date;

  @Column({ type: 'timestamp' })
  fin: Date;

  @Column({ nullable: true })
  comentario: string;

  @Column()
  vacaciones_id: number;

  @Column({ nullable: true }) // pediente-null, aprobado-true, rechazado-false
  estado: boolean;

  @Column()
  aprobado_por: number;

  @Column({ default: true })
  flag: boolean;
}
