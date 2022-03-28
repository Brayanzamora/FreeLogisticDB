import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catmaeetapa', { schema: 'crm' })
export class Etapa {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  order: number;

  @Column()
  name: string;

  @Column({ default: true })
  flag: boolean;
}
