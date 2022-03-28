import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tenant", { schema: "master" })
export class Tenant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  host: string;

  @Column()
  database: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  port: number;

  @Column({ name: "empresa_id" })
  empresa: number;

  @Column()
  flag?: boolean;
}
