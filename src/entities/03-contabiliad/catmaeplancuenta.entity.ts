import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catmaeplancuenta', { schema: 'contabilidad' })
export class PlanCuenta {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  numero: string;

  @Column()
  nombre: string;

  @Column()
  nivel: string;

  @Column()
  tipo: string;

  @Column()
  analisis?: string;

  @Column()
  banco?: string;

  @Column()
  cuenta?: string;

  // @Column({ name: "balance_id"})
  // balance?: number;

  @Column()
  conversion?: string;

  @Column({ name: 'amarredebe_id' })
  amarreDebe?: number;

  @Column({ name: 'amarrehaber_id' })
  amarreHaber?: number;

  // @Column()
  // concepto?: number;

  @Column({ name: 'entidadfinanciera_id' })
  entidadFinanciera?: number;

  // @Column()
  // epg?: number;

  @Column({ name: 'tipomoneda_id' })
  tipoMoneda?: number;

  @Column()
  equivalente?: number;

  @Column()
  flag?: boolean;
}
