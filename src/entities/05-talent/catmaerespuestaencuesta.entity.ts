import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaerespuestaencuesta', schema)
export class Respuestaencuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  encuestatrabajador_id: number;

  @Column()
  detalleencuesta_id: number;

  @Column({ default: true })
  flag: boolean;

  // @OneToMany(
  //   () => Respuestatexto,
  //   (respuestaTexto) => respuestaTexto.respuestaencuesta,
  //   {}
  // )
  // respuestaTexto: Respuestatexto[];

  // @OneToMany(
  //   () => Respuestadetalletipo,
  //   (respuestaDetalleTipo) => respuestaDetalleTipo.respuestaencuesta,
  //   {}
  // )
  // respuestaDetalleTipo: Respuestadetalletipo[];
}
