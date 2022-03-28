import { MigrationInterface, QueryRunner } from "typeorm";
import { Balance } from "../../../entities/03-contabiliad/catmaebalance.entity";
import { BALANCE } from "./data/catmaebalance.seed";

export class BalanceSeed1613000000400 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaebalance";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const balance: Partial<Balance>[] = [];

    for (const b of BALANCE) {
      balance.push(b);
    }

    await queryRunner.manager.getRepository(Balance).save(balance);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        BALANCE.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Balance).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
