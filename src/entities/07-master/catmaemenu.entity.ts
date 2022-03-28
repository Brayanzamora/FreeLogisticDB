import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaemenu", { schema: "master" })
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  url?: string;

  @Column()
  icon?: string;

  @Column()
  orden: number;

  @Column()
  nivel: number;

  @Column()
  actions: boolean;

  @Column({ name: "parent_id" })
  parent?: number;

  @Column({ default: true })
  flag?: boolean;
}
