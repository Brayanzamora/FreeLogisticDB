import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { schema } from './talent.schema';

export enum TipoContratoDocumento {
  IMAGE = 'IMAGE',
  FILE = 'FILE',
}

@Entity('catdetcontratodocumento', schema)
export class ContratoDocumento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  nombre: string;

  @CreateDateColumn({ type: 'timestamp' })
  fechacreacion: Date;

  @Column({
    type: 'enum',
    enum: TipoContratoDocumento,
    default: TipoContratoDocumento.FILE,
  })
  tipo: TipoContratoDocumento;

  @Column()
  contrato_id: number;
}
