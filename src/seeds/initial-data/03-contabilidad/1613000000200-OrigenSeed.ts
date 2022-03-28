import { MigrationInterface, QueryRunner } from "typeorm";
import { Origen } from "../../../entities/03-contabiliad/catmaeorigen.entity";
import { ORIGEN } from "./data/catmaeorigen.seed";

export class OrigenSeed1613000000200 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaeorigen";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const origen: Partial<Origen>[] = [];

    for (const o of ORIGEN) {
      origen.push(o);
    }

    await queryRunner.manager.getRepository(Origen).save(origen);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        ORIGEN.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Origen).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
