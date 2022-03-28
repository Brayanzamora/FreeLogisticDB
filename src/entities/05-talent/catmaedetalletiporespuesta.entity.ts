import { Entity, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaedetalletiporespuesta', schema)
export class Detalletiporespuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tiporespuesta_id: number;

  @Column({ default: true })
  flag: boolean;
}
