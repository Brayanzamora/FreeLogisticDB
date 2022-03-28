import { Trabajador } from "../../../entities/02-personas/catmaetrabajador.entity";
import { MigrationInterface, QueryRunner } from "typeorm";
import { TRABAJADORES } from "./data/catmaetrabajador.seed";

export class TrabajadorSeed1614000006002 implements MigrationInterface {
  private readonly tableName = "personas.catmaetrabajador";

  public async up(queryRunner: QueryRunner): Promise<void> {
    let trabajadores: Partial<Trabajador>[] = [];
    trabajadores = TRABAJADORES;

    await queryRunner.manager.getRepository(Trabajador).save(trabajadores);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        TRABAJADORES.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Trabajador).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
