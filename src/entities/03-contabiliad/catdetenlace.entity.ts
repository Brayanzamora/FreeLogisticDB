import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catdetenlace", { schema: "contabilidad" })
export class DetalleEnlace {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  formato: number;

  @Column({ name: "plancuenta_id" })
  planCuenta: number;

  @Column({ name: "balance_id" })
  balance: number;
}
