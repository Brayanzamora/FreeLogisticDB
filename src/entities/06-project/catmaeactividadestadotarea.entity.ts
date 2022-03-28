import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TipoActivacion {
	INICIO = 'INICIO',
	FIN = 'FIN',
	NINGUNO = 'NINGUNO',
	PREDETERMINADO = 'PREDETERMINADO'
}

@Entity('catmaeactividadestadotarea', { schema: 'project' })
export class Actividadestadotarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
	abbr: string;

	@Column({
		type: 'enum',
		enum: TipoActivacion,
		default: TipoActivacion.NINGUNO
	})
	tipoactivacion: TipoActivacion;

  @Column({ default: null })
	color: string;

  @Column({ default: true })
  flag: boolean;
}
