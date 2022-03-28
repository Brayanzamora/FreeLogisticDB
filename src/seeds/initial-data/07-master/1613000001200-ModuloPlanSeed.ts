import { SegDetModuloPlan } from "../../../entities/07-master/segdetmoduloplan.entity";
import { MigrationInterface, QueryRunner } from "typeorm";
import { MODULO_PLAN } from "./data/setdetmoduloplan.seed";

export class ModuloPlanSeed1613000001200 implements MigrationInterface {
  private readonly tableName = "master.segdetmoduloplan";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const modulo_plan: Partial<SegDetModuloPlan>[] = [];

    for (const b of MODULO_PLAN) {
      modulo_plan.push(b);
    }

    await queryRunner.manager.getRepository(SegDetModuloPlan).save(modulo_plan);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        MODULO_PLAN.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(SegDetModuloPlan).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
