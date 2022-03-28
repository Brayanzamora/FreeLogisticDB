import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("segdetmoduloplan", { schema: "master" })
export class SegDetModuloPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "modulo_id" })
  modulo: number;

  @Column({ name: "plan_id" })
  plan: number;
}
