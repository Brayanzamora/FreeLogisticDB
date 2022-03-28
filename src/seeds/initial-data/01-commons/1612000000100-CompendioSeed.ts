import { COMPENDIO } from "./data/catmaecompendio.seed";
import { Compendio } from "../../../entities/01-commons/catmaecompendio.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class CompendioSeed1612000000100 implements MigrationInterface {
  private readonly tableName = "commons.catmaecompendio";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const compendio: Partial<Compendio>[] = [];

    for (const c of COMPENDIO) {
      compendio.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Compendio).save(compendio);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        COMPENDIO.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Compendio).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
