import { MigrationInterface, QueryRunner } from "typeorm";
import { Tenant } from "../../../entities/07-master/catmaetenant.entity";
import { TENANT } from "./data/tenant.seed";

export class TenantSeed1614000002200 implements MigrationInterface {
  private readonly tableName = "master.tenant";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const tenants: Partial<Tenant>[] = [];

    for (const c of TENANT) {
      tenants.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Tenant).save(TENANT);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        TENANT.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Tenant).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
