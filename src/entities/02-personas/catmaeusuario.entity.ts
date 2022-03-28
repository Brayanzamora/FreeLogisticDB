import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaeusuario", { schema: "personas" })
export class Usuario {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 50, unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  isAdmin?: boolean;

  @Column()
  isLoggin?: boolean;

  @Column()
  session?: string;

  @Column({ name: "trabajador_id" })
  trabajador?: number;

  @Column({ name: "perfil_id" })
  perfil?: number;

  @Column()
  flag?: boolean;
}
