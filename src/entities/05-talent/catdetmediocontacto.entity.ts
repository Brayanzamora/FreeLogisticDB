import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { schema } from './talent.schema';

@Entity('catdetmediocontacto', schema)
export class MedioContacto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'boolean', default: true })
  flag: boolean;

  @Column()
  tipomedio_id: number;

  @Column()
  persona_id: number;
}
