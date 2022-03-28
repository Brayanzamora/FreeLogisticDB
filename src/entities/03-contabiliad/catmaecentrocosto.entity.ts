import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catmaecentrocosto', { schema: 'contabilidad' })
export class CentroCosto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  nombre: string;

  @Column({ default: true })
  flag: boolean;

  @Column()
  debe_id: number;

  @Column()
  haber_id: number;
}
