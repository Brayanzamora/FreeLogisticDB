import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaepermisodias', schema)
export class PermisoDias {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'time' })
  minutos: string;

  @Column()
  permiso_id: number;

  @Column({ default: true })
  flag: boolean;

  @Column({ default: false })
  recuperado: boolean;
}
