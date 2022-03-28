import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaehoraextra', schema)
export class HoraExtra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  hora_extra_inicio: Date;

  @Column({ type: 'timestamp' })
  hora_extra_fin: Date;

  @Column({ type: 'timestamp' })
  incidente_inicio: Date;

  @Column({ type: 'timestamp' })
  incidente_fin: Date;

  @Column({ type: 'time' })
  hora_inicio: number;

  @Column({ type: 'time' })
  hora_fin: number;

  @Column()
  comentario: string;

  @Column()
  trabajador_id: number;

  @Column({ default: null, nullable: true })
  estado: boolean;

  @Column()
  aprobado_por: number;

  @Column()
  tipo_hora_extra_id: number;

  @Column({ default: true })
  flag: boolean;
}
