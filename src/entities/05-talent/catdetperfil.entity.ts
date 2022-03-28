import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catdetperfil', schema)
export class DetallePerfil {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  show: boolean;

  @Column({ default: true })
  create: boolean;

  @Column({ default: true })
  update: boolean;

  @Column({ default: true })
  delete: boolean;

  @Column({ nullable: false })
  menu: number;

  @Column()
  perfil_id: number;
}
