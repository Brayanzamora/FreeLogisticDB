import { MENU_MODULO } from "./data/segdetmenumodulo";
import { MigrationInterface, QueryRunner } from "typeorm";
import { SegDetMenuModulo } from "../../../entities/07-master/segdetmenumodulo.entity";

export class MenuModuloSeed1613000001400 implements MigrationInterface {
  private readonly tableName = "master.segdetmenumodulo";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const menus: Partial<SegDetMenuModulo>[] = [];

    for (const b of MENU_MODULO) {
      menus.push(b);
    }

    await queryRunner.manager.getRepository(SegDetMenuModulo).save(menus);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        MENU_MODULO.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(SegDetMenuModulo).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
