import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaeferiado', schema)
export class Feriado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('date')
  fecha: string;

  @Column({ default: true })
  estado: boolean;

  @Column({ default: true })
  flag: boolean;
}
