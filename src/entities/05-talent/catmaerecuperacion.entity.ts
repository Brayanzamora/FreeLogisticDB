import { Entity, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { schema } from './talent.schema';
@Entity('catmaerecuperacion', schema)
export class Recuperacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'int' })
  minutosrecupera: number;

  @Column()
  permiso_id: number;
}
