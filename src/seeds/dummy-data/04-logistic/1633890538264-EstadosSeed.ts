import { Estados } from "../../../entities/04-logistic/catmaeestados.entity";
import { MigrationInterface, QueryRunner } from "typeorm";
import { ESTADOS } from "./data/catmaeestados.seed";
import { EstadosTable1633890138514 } from "../../../migrations/04-logistic/1633890138514-EstadosTable";

export class EstadosSeed1633890538264 implements MigrationInterface {
  private readonly tableName = "facturacion.catmaeestados";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const categorias: Partial<Estados>[] = [];

    for (const c of ESTADOS) {
      categorias.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Estados).save(categorias);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        ESTADOS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(EstadosTable1633890138514)
      .delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
