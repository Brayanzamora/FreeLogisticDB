import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catmaeestados', { schema: 'facturacion' })
export class Estados {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: true })
  nombre: string;

  @Column({ length: 6, nullable: true })
  color: string;

  @Column({ length: 50, nullable: true })
  tipo: string;

  @Column({ default: true })
  flag: boolean;
}
