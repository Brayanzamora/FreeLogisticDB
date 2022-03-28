import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaeparametrocuenta", { schema: "contabilidad" })
export class ParametroCuenta {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  year: number;

  @Column()
  retencion: number;

  @Column()
  igv: number;

  @Column()
  honorario: number;

  @Column({ name: "plancuenta_id" })
  plan: number;

  @Column({ name: "plancuenta01_id" })
  plan01: number;

  @Column({ name: "plancuenta02_id" })
  plan02: number;

  @Column({ name: "plancuenta03_id" })
  plan03: number;

  @Column({ name: "plancuenta04_id" })
  plan04: number;

  @Column({ name: "plancuenta05_id" })
  plan05: number;

  @Column({ name: "plancuenta06_id" })
  plan06: number;

  @Column({ name: "plancuenta07_id" })
  plan07: number;

  @Column({ name: "plancuenta08_id" })
  plan08: number;

  @Column({ name: "plancuenta09_id" })
  plan09: number;

  @Column({ name: "plancuenta10_id" })
  plan10: number;

  @Column({ name: "plancuenta11_id" })
  plan11: number;

  @Column({ name: "plancuenta12_id" })
  plan12: number;

  @Column({ name: "plancuenta13_id" })
  plan13: number;

  @Column({ name: "plancuenta14_id" })
  plan14: number;

  @Column({ name: "origen_id" })
  origen: number;

  @Column({ name: "origen01_id" })
  origen01: number;

  @Column({ name: "origen02_id" })
  origen02: number;

  @Column({ name: "origen03_id" })
  origen03: number;

  @Column({ name: "origen04_id" })
  origen04: number;

  @Column({ name: "origen05_id" })
  origen05: number;

  @Column()
  flag?: boolean;
}
