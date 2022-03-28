import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaetiporespuesta', schema)
export class TipoRespuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ default: true })
  flag: boolean;
}
