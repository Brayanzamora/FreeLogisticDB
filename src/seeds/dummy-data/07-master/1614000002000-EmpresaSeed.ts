import { Empresa } from "../../../entities/07-master/catmaeempresa.entity";
import { MigrationInterface, QueryRunner } from "typeorm";
import { EMPRESAS } from "./data/catmaeempresa.seed";

export class EmpresaSeed1614000002000 implements MigrationInterface {
  private readonly tableName = "master.catmaeempresa";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const empresas: Partial<Empresa>[] = [];

    for (const c of EMPRESAS) {
      empresas.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Empresa).save(empresas);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        EMPRESAS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Empresa).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
