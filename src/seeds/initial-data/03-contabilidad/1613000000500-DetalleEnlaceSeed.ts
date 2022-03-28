import { MigrationInterface, QueryRunner } from "typeorm";
import { DetalleEnlace } from "../../../entities/03-contabiliad/catdetenlace.entity";
import { DETALLE_ENLACE } from "./data/catdetbalance.seed";

export class DetalleEnlaceSeed1613000000500 implements MigrationInterface {
  private readonly tableName = "contabilidad.catdetenlace";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const enlace: Partial<DetalleEnlace>[] = [];

    for (const b of DETALLE_ENLACE) {
      enlace.push(b);
    }

    await queryRunner.manager.getRepository(DetalleEnlace).save(enlace);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        DETALLE_ENLACE.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(DetalleEnlace).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
