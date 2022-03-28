import { Categoria } from "../../../entities/04-logistic/catmaecategoria.entity";
import { MigrationInterface, QueryRunner } from "typeorm";
import { CATEGORIAS } from "./data/catmaecategoria.seed";
import { CategoriaTable1610000002402 } from "../../../migrations/04-logistic/1610000002402-CategoriaTable";

export class CategoriaSeed1614000004002 implements MigrationInterface {
  private readonly tableName = "facturacion.catmaecategoria";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const categorias: Partial<Categoria>[] = [];

    for (const c of CATEGORIAS) {
      categorias.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Categoria).save(categorias);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        CATEGORIAS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(CategoriaTable1610000002402)
      .delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
