import { PLANES } from "./data/catmaeplan.seed";
import { Plan } from "../../../entities/07-master/catmaeplan.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class PlanSeed1613000001100 implements MigrationInterface {
  private readonly tableName = "master.catmaeplan";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const planes: Partial<Plan>[] = [];

    for (const b of PLANES) {
      planes.push(b);
    }

    await queryRunner.manager.getRepository(Plan).save(planes);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        PLANES.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Plan).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
