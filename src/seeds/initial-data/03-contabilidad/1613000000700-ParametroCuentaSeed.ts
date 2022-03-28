import { ParametroCuenta } from "../../../entities/03-contabiliad/catmaeparemetrocuenta.entity";
import { MigrationInterface, QueryRunner } from "typeorm";
import { PAREMTRO_CUENTA } from "./data/catmaeparametrocuenta.seed";

export class ParametroCuentaSeed1613000000700 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaeparametrocuenta";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const parametros: Partial<ParametroCuenta>[] = [];

    for (const b of PAREMTRO_CUENTA) {
      parametros.push(b);
    }

    await queryRunner.manager.getRepository(ParametroCuenta).save(parametros);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        PAREMTRO_CUENTA.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(ParametroCuenta).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
