import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catmaearea', schema)
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  abbr: string;

  @Column({ nullable: true })
  parent_id?: number;

  @Column({ default: true })
  flag: boolean;
}
