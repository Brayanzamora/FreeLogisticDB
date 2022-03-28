import { MigrationInterface, QueryRunner } from "typeorm";
import { ORIGEN_VOUCHER } from "./data/catorigenvoucher.seed";
import { OrigenVoucher } from "../../../entities/03-contabiliad/catorigenvoucher.entity";

export class OrigenVoucherSeed1613000000600 implements MigrationInterface {
  private readonly tableName = "contabilidad.catdetorigenvoucher";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const origen_voucher: Partial<OrigenVoucher>[] = [];

    for (const b of ORIGEN_VOUCHER) {
      origen_voucher.push(b);
    }

    await queryRunner.manager.getRepository(OrigenVoucher).save(origen_voucher);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        ORIGEN_VOUCHER.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(OrigenVoucher).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
