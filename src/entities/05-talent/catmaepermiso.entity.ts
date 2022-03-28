import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaepermiso', schema)
export class Permiso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  razon_id: number;

  @Column()
  justificacion_id: number;

  @Column()
  trabajador_id: number;

  @Column({ type: 'int', nullable: true })
  total_dias: number;

  @Column({ default: true, nullable: true })
  permisobtw: boolean;

  @Column({ type: 'int', nullable: true })
  total_horas: number;

  @Column({ type: 'int', nullable: true })
  total_minutos: number;

  @Column({ type: 'timestamp', nullable: true })
  fecha: Date;

  @Column({ type: 'time', nullable: true })
  hora_inicio?: string;

  @Column({ type: 'time', nullable: true })
  hora_fin?: string;

  @Column({ nullable: true })
  comentario: string;

  @Column({ default: null, nullable: true })
  estado?: boolean;

  @Column()
  aprobado_por?: number;

  // @OneToMany((type) => PermisoDias, (permisodias) => permisodias.permiso, {
  //   cascade: ['insert', 'update', 'remove'],
  //   onDelete: 'CASCADE',
  //   onUpdate: 'CASCADE',
  //   nullable: true,
  // })
  // permisodias: PermisoDias[];

  @Column({ default: true })
  flag: boolean;
}
