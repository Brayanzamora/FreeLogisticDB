import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("catdetorigen", { schema: "contabilidad" })
export class DetalleOrigen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;

  @Column({ default: 0 })
  enero?: number;

  @Column({ default: 0 })
  febrero?: number;

  @Column({ default: 0 })
  marzo?: number;

  @Column({ default: 0 })
  abril?: number;

  @Column({ default: 0 })
  mayo?: number;

  @Column({ default: 0 })
  junio?: number;

  @Column({ default: 0 })
  julio?: number;

  @Column({ default: 0 })
  agosto?: number;

  @Column({ default: 0 })
  septiembre?: number;

  @Column({ default: 0 })
  octubre?: number;

  @Column({ default: 0 })
  noviembre?: number;

  @Column({ default: 0 })
  diciembre?: number;

  @Column({ name: "origen_id" })
  origen: number;
}
