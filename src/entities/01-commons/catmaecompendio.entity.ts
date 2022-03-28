import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaecompendio", { schema: "commons" })
export class Compendio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  flag?: boolean;
}
