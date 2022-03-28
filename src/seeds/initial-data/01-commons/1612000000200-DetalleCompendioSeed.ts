import { MigrationInterface, QueryRunner } from "typeorm";
import { DetalleCompendio } from "../../../entities/01-commons/catdetcompendio.entity";
import { DETALLE_COMPENDIO } from "./data/catdetcompendio.seed";

export class DetalleCompendioSeed1612000000200 implements MigrationInterface {
  private readonly tableName = "commons.catdetcompendio";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const detalle_compendio: Partial<DetalleCompendio>[] = [];

    for (const c of DETALLE_COMPENDIO) {
      detalle_compendio.push({ ...c, flag: true });
    }

    await queryRunner.manager
      .getRepository(DetalleCompendio)
      .save(detalle_compendio);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        DETALLE_COMPENDIO.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(DetalleCompendio).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
