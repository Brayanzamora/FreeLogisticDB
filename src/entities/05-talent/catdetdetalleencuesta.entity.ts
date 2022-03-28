import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { schema } from './talent.schema';

export enum TipoInputPregunta {
  TEXTO = 'TEXTO',
  SELECT = 'SELECT',
  MULTISELECT = 'MULTISELECT',
}

@Entity('catmaedetalleencuesta', schema)
export class DetalleEncuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  estado: boolean;

  @Column({ type: 'float' })
  orden: number;

  @Column()
  pregunta_id: number;

  @Column()
  encuesta_id: number;

  @Column()
  tipo_respuesta_id: number;

  @Column({
    type: 'enum',
    enum: TipoInputPregunta,
  })
  tipoinput: TipoInputPregunta;
}
