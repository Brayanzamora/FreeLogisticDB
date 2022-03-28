import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catdethistorialrol', schema)
export class HistorialRol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rol_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  inicio: Date;

  @Column({ type: 'timestamp', nullable: true })
  fin?: Date;

  @Column()
  trabajador_id: number;

  @Column({ default: true })
  flag: boolean;
}
