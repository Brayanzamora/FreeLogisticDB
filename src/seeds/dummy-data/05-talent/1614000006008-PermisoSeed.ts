import { Permiso } from "../../../entities/05-talent/catmaepermiso.entity";
import { MigrationInterface, QueryRunner } from "typeorm";
import { PERMISOS } from "./data/catmaeapermiso.seed";

export class PermisoSeed1614000006008 implements MigrationInterface {
  private readonly tableName = "talent.catmaepermiso";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const permisos: Partial<Permiso>[] = [];

    for (const c of PERMISOS) {
      permisos.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Permiso).save(permisos);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        PERMISOS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Permiso).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
