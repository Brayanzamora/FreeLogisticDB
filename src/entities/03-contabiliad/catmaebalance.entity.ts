import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaebalance", { schema: "contabilidad" })
export class Balance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  nombre: string;

  @Column()
  sbs?: string;

  @Column()
  formula?: string;

  @Column()
  flag?: boolean;
}
