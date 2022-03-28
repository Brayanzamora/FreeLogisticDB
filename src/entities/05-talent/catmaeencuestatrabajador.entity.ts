import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaeencuestatrabajador', schema)
export class EncuestaTrabajador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  trabajador_id: number;

  @Column()
  encuesta_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechacreacion: Date;

  @Column({ default: true })
  flag: boolean;

  // @OneToMany(
  //   () => Respuestaencuesta,
  //   (respuestaEncuesta) => respuestaEncuesta.encuestatrabajador,
  //   {}
  // )
  // respuestaEncuesta: Respuestaencuesta[];
}
