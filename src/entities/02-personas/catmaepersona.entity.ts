import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catmaepersona", { schema: "personas" })
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ name: "razon_social" })
  rsocial?: string;

  @Column({ nullable: true })
  direccion: string;

  @Column({ name: "pais_id" })
  pais?: number;

  @Column({ unique: true })
  numDoc: string;

  @Column({ name: "departamento_id" })
  departamento?: number;

  @Column({ name: "provincia_id" })
  provincia?: number;

  @Column({ name: "distrito_id" })
  distrito?: number;

  @Column({ name: "tipodoc_id" })
  tipoDoc: number;

  @Column({ default: true })
  flag?: boolean;
}
