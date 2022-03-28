import { MigrationInterface, QueryRunner } from "typeorm";
import { DETALLE_ORIGEN } from "./data/catdetorigen.seed";
import { DetalleOrigen } from "../../../entities/03-contabiliad/catdetorigen.entity";

export class DetalleOrigenSeed1613000000300 implements MigrationInterface {
  private readonly tableName = "contabilidad.catdetorigen";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const detalle_origen: Partial<DetalleOrigen>[] = [];

    for (const o of DETALLE_ORIGEN) {
      detalle_origen.push(o);
    }

    await queryRunner.manager.getRepository(DetalleOrigen).save(detalle_origen);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        DETALLE_ORIGEN.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(DetalleOrigen).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
