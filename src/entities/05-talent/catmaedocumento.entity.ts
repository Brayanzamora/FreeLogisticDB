import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaedocumento', schema)
export class Documento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  categoria_id: number;

  @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion' })
  fechaCreacion: Date;

  @Column({ default: true, nullable: true })
  flag: boolean;

  @Column()
  creado_por: number;

  // @OneToMany(
  //   () => DocumentoVersion,
  //   (documentoVersion) => documentoVersion.documento,
  //   {
  //     cascade: ['insert'],
  //   }
  // )
  // @JoinColumn({ name: 'documento_version_id' })
  // documentoVersion: DocumentoVersion[];
}
