import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaesuscripcion", { schema: "master" })
export class Suscripcion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  inicio: Date;

  @Column()
  fin: Date;

  @Column({ name: "plan_id" })
  plan: number;

  @Column({ name: "empresa_id" })
  empresa: number;

  @Column()
  flag?: boolean;
}
