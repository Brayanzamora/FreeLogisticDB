import { SUSCRIPCIONES } from "./data/catmaesuscripcion.seed";
import { MigrationInterface, QueryRunner } from "typeorm";
import { Suscripcion } from "../../../entities/07-master/catmaesuscripcion.entity";

export class SuscripcionSeed1614000002100 implements MigrationInterface {
  private readonly tableName = "master.catmaesuscripcion";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const suscripciones: Partial<Suscripcion>[] = [];

    for (const c of SUSCRIPCIONES) {
      suscripciones.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Suscripcion).save(suscripciones);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        SUSCRIPCIONES.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Suscripcion).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
