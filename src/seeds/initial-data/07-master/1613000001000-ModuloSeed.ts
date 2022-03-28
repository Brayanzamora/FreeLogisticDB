import { MigrationInterface, QueryRunner } from "typeorm";
import { Modulo } from "../../../entities/07-master/catmaemodulo.entity";
import { MODULOS } from "./data/catmaemodulo.seed";

export class ModuloSeed1613000001000 implements MigrationInterface {
  private readonly tableName = "master.catmaemodulo";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const modulos: Partial<Modulo>[] = [];

    for (const b of MODULOS) {
      modulos.push(b);
    }

    await queryRunner.manager.getRepository(Modulo).save(modulos);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        MODULOS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Modulo).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
