import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("catdetcompendio", { schema: "commons" })
export class DetalleCompendio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  nombre: string;

  @Column()
  color?: string;

  @Column()
  abbr?: string;

  @Column()
  orden: number;

  @Column()
  compendio_id: number;

  @Column()
  flag?: boolean;
}
