import { Entity, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { schema } from './talent.schema';
@Entity('catmaerespuestadetalletipo', schema)
export class Respuestadetalletipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  respuestaencuesta_id: number;

  @Column()
  detalletiporespuesta_id: number;

  @Column({ default: true })
  estado: boolean;
}
