import { REGLAS_NEGOCIO } from "../01-commons/data/catmaereglasdenegocio.seed";
import { MigrationInterface, QueryRunner } from "typeorm";
import { ReglasNegocio } from "../../../entities/01-commons/catmaereglasdenegocio.entity";

export class ReglasNegocioSeed1612000000400 implements MigrationInterface {
  private readonly tableName = "commons.catmaereglasdenegocio";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const reglas: Partial<ReglasNegocio>[] = [];

    for (const c of REGLAS_NEGOCIO) {
      reglas.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(ReglasNegocio).save(reglas);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        reglas.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(ReglasNegocio).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
