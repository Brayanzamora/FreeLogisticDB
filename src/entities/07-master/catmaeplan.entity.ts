import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("catmaeplan", { schema: "master" })
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: true })
  nombre: string;

  @Column({ type: "decimal", precision: 9, scale: 3 })
  precio: number;

  @Column({ name: "pais_id" })
  pais: number;

  @Column({ name: "moneda_id" })
  moneda: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;

  @Column({ default: true })
  flag?: boolean;
}
