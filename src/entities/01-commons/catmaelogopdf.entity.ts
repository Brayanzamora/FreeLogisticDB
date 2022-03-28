import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catmaelogopdf', { schema: 'commons' })
export class LogoPdf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dataUri: string;

  @Column({ type: 'int' })
  width: number;

  @Column({ type: 'int' })
  height: number;
}
