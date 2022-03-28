import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catdetorigenvoucher", { schema: "contabilidad" })
export class OrigenVoucher {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "tipovoucher_id" })
  tipoVoucher: number;

  @Column({ name: "origen_id" })
  origen: number;

  @Column()
  flag?: boolean;
}
