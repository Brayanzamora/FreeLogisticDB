import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catdetelementogrupo', { schema: 'commons' })
export class DetalleElementoGrupo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'elemento_id' })
  elemento_id: number;

  @Column({ name: 'grupo_id' })
  grupo_id: number;

  @Column({ default: true })
  flag: boolean;
}
