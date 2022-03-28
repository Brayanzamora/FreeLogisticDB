import { Entity, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaeestudio', schema)
export class Estudio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ type: 'timestamp' })
  inicio: Date;

  @Column({ type: 'timestamp' })
  fin: Date;

  @Column()
  categoriaestudio_id: number;

  @Column()
  creado_por: number;

  @Column({ default: true })
  flag: boolean;
}
