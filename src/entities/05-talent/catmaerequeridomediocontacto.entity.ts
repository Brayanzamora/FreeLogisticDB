import { Entity, PrimaryGeneratedColumn, Column, JoinColumn } from 'typeorm';
import { schema } from './talent.schema';

export enum TipoPersonaMedio {
  CLIENTE = 'CLIENTE',
  TRABAJADOR = 'TRABAJADOR',
  PROVEEDOR = 'PROVEEDOR',
}

@Entity('catmaerequeridomediocontacto', schema)
export class RequeridoMedioContacto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TipoPersonaMedio,
    name: 'tipo_persona',
  })
  tipo_persona: TipoPersonaMedio;

  @Column()
  tipomediocontacto_id: number;

  @Column({ default: true })
  requerido: boolean;
}
