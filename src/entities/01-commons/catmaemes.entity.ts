import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaemes", { schema: "commons" })
export class Mes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mes: string;

  @Column()
  nombre: string;

  @Column()
  active: boolean;

  @Column()
  flag?: boolean;
}
