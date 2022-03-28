import { MigrationInterface, QueryRunner } from "typeorm";
import { PlanCuenta } from "../../../entities/03-contabiliad/catmaeplancuenta.entity";
import { PLAN_CUENTA } from "./data/catmaeplancuenta.seed";

export class PlanCuentaSeed1613000000100 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaeplancuenta";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const plancuenta: Partial<PlanCuenta>[] = [];

    for (const plan of PLAN_CUENTA) {
      plancuenta.push(plan);
    }

    await queryRunner.manager.getRepository(PlanCuenta).save(plancuenta);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        PLAN_CUENTA.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(PlanCuenta).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
