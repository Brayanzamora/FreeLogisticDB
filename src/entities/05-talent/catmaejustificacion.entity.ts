import { Entity, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { schema } from './talent.schema';

export enum TipoJustificacion {
  DAYS = 'DAYS',
  HOURS = 'HOURS',
  MINUTES = 'MINUTES',
}

@Entity('catmaejustificacion', schema)
export class Justificacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  abbr: string;

  @Column({
    type: 'enum',
    enum: TipoJustificacion,
    nullable: true,
    name: 'tipo_maximo',
  })
  tipo_maximo: TipoJustificacion;

  @Column({ nullable: true, name: 'maximo_cantidad' })
  maximo_cantidad: number;

  @Column()
  razon_id: number;

  @Column({ default: true })
  flag: boolean;
}
