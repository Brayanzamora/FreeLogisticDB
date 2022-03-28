import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaerespuestatexto', schema)
export class Respuestatexto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  respuesta: string;

  @Column()
  respuestaencuesta_id: number;

  @Column({ default: true })
  estado: boolean;
}
