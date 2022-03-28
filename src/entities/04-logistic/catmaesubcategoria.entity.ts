import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catmaesubcategoria', { schema: 'facturacion' })
export class SubCategoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  codigo: string;

  @Column()
  nombre: string;

  @Column()
  categoria_id: number;

  @Column({ default: true })
  flag: boolean;
}
