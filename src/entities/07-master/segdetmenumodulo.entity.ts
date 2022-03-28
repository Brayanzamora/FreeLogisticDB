import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("segdetmenumodulo", { schema: "master" })
export class SegDetMenuModulo {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: "modulo_id" })
  modulo: number;

  @Column({ name: "menu_id" })
  menu: number;

  @Column()
  flag?: boolean;
}
