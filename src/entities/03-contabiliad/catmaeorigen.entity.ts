import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("catmaeorigen", { schema: "contabilidad" })
export class Origen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  descripcion: string;

  @Column()
  flag?: boolean;
}
