import { MigrationInterface, QueryRunner } from "typeorm";
import { SUB_CATEGORIAS } from "./data/catmaesubcategoria.seed";
import { SubCategoriaTable1610000002403 } from "../../../migrations/04-logistic/1610000002403-SubCategoriaTable";
import { SubCategoria } from "../../../entities/04-logistic/catmaesubcategoria.entity";

export class SubCategoriaSeed1614000004003 implements MigrationInterface {
  private readonly tableName = "facturacion.catmaesubcategoria";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const subCategorias: Partial<SubCategoria>[] = [];

    for (const c of SUB_CATEGORIAS) {
      subCategorias.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(SubCategoria).save(subCategorias);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        SUB_CATEGORIAS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(SubCategoriaTable1610000002403)
      .delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
