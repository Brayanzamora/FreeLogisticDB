import { MESES } from "./data/catmaemes.seed";
import { MigrationInterface, QueryRunner } from "typeorm";
import { Mes } from "../../../entities/01-commons/catmaemes.entity";

export class MesSeed1612000000300 implements MigrationInterface {
  private readonly tableName = "commons.catmaemes";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const meses: Partial<Mes>[] = [];

    for (const c of MESES) {
      meses.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Mes).save(meses);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        meses.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Mes).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
