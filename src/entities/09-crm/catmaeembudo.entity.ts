import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catmaeembudo', { schema: 'crm' })
export class Embudo {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  order: number;

  @Column()
  name: string;

  @Column({ name: 'etapa_id' })
  etapa: number;

  @Column({ default: true })
  flag: boolean;
}
