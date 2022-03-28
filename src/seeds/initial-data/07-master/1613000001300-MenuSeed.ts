import { MigrationInterface, QueryRunner } from "typeorm";
import { Menu } from "../../../entities/07-master/catmaemenu.entity";
import { MENUS } from "./data/catmaemenu.seed";

export class MenuSeed1613000001300 implements MigrationInterface {
  private readonly tableName = "master.catmaemenu";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const menus: Partial<Menu>[] = [];

    for (const b of MENUS) {
      menus.push(b);
    }

    await queryRunner.manager.getRepository(Menu).save(menus);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        MENUS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Menu).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
