import {
  CreateDateColumn,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaedocumentoversionleido', schema)
export class DocumentoVersionLeido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  documentoversion_id: number;

  @Column()
  trabajador_id: number;

  @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion' })
  fechaCreacion: Date;
}
