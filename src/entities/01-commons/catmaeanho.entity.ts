import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaeanho", { schema: "commons" })
export class Anho {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  anho: string;

  @Column()
  active: boolean;

  @Column()
  flag?: boolean;
}
