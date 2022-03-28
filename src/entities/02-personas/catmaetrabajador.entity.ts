import { Column, Entity, PrimaryGeneratedColumn, TreeChildren } from 'typeorm';

export enum EstadoTrabajador {
  ACTIVO = 'ACTIVO',
  INACTIVO = 'INACTIVO',
  CESADO = 'CESADO',
  ELIMINADO = 'ELIMINADO',
}

@Entity('catmaetrabajador', { schema: 'personas' })
export class Trabajador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '/default.img' })
  foto: string;

  @Column({ name: 'sexo_id' })
  sexo: number;

  @Column({ name: 'rol_id' })
  rol: number;

  @Column({ name: 'persona_id' })
  persona: number;

  @Column({ name: 'area_id' })
  area?: number;

  @Column({
    type: 'enum',
    enum: EstadoTrabajador,
    default: EstadoTrabajador.ACTIVO,
  })
  estado: EstadoTrabajador;

  @Column({ nullable: true })
  climalaboral?: string;

  @Column({ name: 'centrocosto_id' })
  centrocosto?: number;

  @Column({ name: 'undnegocio_id' })
  undnegocio?: number;

  @Column({ name: 'categoria_id' })
  categoria?: number;

  @Column({ name: 'subcategoria_id' })
  subcategoria?: number;

  @Column({ nullable: true, type: 'date' })
  birthday?: string;

  @Column({ nullable: true, name: 'civilstatus_id' })
  civilstatus?: number;

  @Column({ nullable: true, name: 'nationality_id' })
  nationality?: number;

  @Column({ nullable: true, type: 'date', name: 'rxh_start' })
  rxhStart?: string;

  @Column({ nullable: true, type: 'date', name: 'rxh_end' })
  rxhEnd?: string;

  @Column({
    type: 'boolean',
    nullable: true,
    default: false,
  })
  hasChildren?: boolean;

  @Column({
    type: 'int',
    nullable: true,
    default: 0,
  })
  amountChildren?: number;
}
