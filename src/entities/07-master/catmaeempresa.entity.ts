import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("catmaeempresa", { schema: "master" })
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;

  @Column({ default: true })
  flag?: boolean;

  @Column({ name: "moneda_id" })
  moneda: number;

  @Column({ name: "persona_id" })
  persona: number;
}
