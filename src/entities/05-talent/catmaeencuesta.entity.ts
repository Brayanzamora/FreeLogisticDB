import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { schema } from './talent.schema';
import { OneToMany } from 'typeorm';

@Entity('catmaencuesta', schema)
export class Encuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechacreacion: Date;

  @Column({ type: 'timestamp' })
  inicio: Date;

  @Column({ type: 'timestamp' })
  fin: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
    name: 'fecha_inicio_trabajador',
  })
  fechaInicioTrabajador: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'fecha_fin_trabajador' })
  fechaFinTrabajador: Date;

  @Column({ default: true })
  estado: boolean;

  @Column({ default: true })
  flag: boolean;

  // @OneToMany(
  //   () => DetalleEncuesta,
  //   (detalleEncuesta) => detalleEncuesta.encuesta,
  //   {
  //     cascade: ['insert', 'update', 'remove'],
  //     onDelete: 'CASCADE',
  //     onUpdate: 'CASCADE',
  //   }
  // )
  // @JoinColumn({ name: 'detalle_encuesta_id' })
  // detalleEncuesta: DetalleEncuesta[];

  @Column()
  periodoencuesta_id: number;
}
