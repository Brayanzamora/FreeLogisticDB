import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaedocumentoversion', schema)
export class DocumentoVersion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  version: number;

  @Column()
  nombreArchivo: string;

  @Column()
  url: string;

  @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'date_modificacion' })
  dateModificacion: Date;

  @Column({ type: 'boolean', default: true })
  visible: boolean;

  @Column({ default: true, nullable: true })
  flag: boolean;

  @Column()
  documento_id: number;

  // @OneToMany(
  //   () => DocumentoVersionLeido,
  //   (documentoVersionLeido) => documentoVersionLeido.documentoVersion
  // )
  // documentoVersionLeido: DocumentoVersionLeido[];
}
