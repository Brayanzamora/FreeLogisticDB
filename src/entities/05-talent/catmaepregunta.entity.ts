import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaepregunta', schema)
export class Pregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ default: true })
  flag: boolean;

  @Column()
  grupopregunta_id: number;
}
