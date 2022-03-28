import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TipoValor {
  STRING = "STRING",
  NUMBER = "NUMBER",
  PERCENT = "PERCENT",
  DATE = "DATE",
}

@Entity("catmaereglasdenegocio", { schema: "commons" })
export class ReglasNegocio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  clave: string;

  @Column()
  valor: string;

  @Column({
    type: "enum",
    enum: TipoValor,
    name: "tipo_valor",
    default: TipoValor.STRING,
  })
  tipoValor: TipoValor;

  @Column()
  modulo: string;

  @Column({ default: true })
  flag?: boolean;
}
