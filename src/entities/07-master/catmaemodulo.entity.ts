import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaemodulo", { schema: "master" })
export class Modulo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ name: "mtipo_id" })
  mTipo: number;
}
