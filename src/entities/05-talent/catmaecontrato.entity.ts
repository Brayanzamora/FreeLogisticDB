import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaecontrato', schema)
export class Contrato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  inicio: Date;

  @Column({ type: 'timestamp' })
  fin: Date;

  @Column({ type: 'decimal', precision: 9, scale: 3, nullable: true })
  sueldo: number;

  @Column({ type: 'decimal', precision: 9, scale: 3, nullable: true })
  haber1: number;

  @Column({ type: 'decimal', precision: 9, scale: 3, nullable: true })
  haber2: number;

  @Column({ type: 'decimal', precision: 9, scale: 3, nullable: true })
  haber3: number;

  @Column({ type: 'decimal', precision: 9, scale: 3, nullable: true })
  haber4: number;

  @Column({ type: 'decimal', precision: 9, scale: 3, nullable: true })
  egreso1: number;

  @Column({ type: 'decimal', precision: 9, scale: 3, nullable: true })
  egreso2: number;

  @Column({ type: 'decimal', precision: 9, scale: 3, nullable: true })
  egreso3: number;

  @Column({ type: 'decimal', precision: 9, scale: 3, nullable: true })
  egreso4: number;

  @Column()
  tipocontrato_id: number;

  @Column()
  clasecontrato_id: number;

  @Column()
  tipomoneda_id: number;

  @Column()
  trabajador_id: number;

  @Column({ default: true })
  flag: boolean;

  @Column({ default: false, name: 'horario_rotativo' })
  horarioRotativo: boolean;

  @Column()
  tiemporenovacioncontrato_id: number;

  @Column()
  tiporenovacioncontrato_id: number;
}
