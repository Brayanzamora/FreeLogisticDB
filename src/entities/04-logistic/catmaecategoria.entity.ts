import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catmaecategoria', { schema: 'facturacion' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  codigo: string;

  @Column()
  nombre: string;

  @Column()
  centrocosto_id: number;

  @Column({ default: true })
  flag: boolean;
}
