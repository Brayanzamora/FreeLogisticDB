import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaerol", { schema: "personas" })
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  abbr: string;

  @Column()
  parent_id?: number;

  @Column({ default: true })
  flag?: boolean;
}
