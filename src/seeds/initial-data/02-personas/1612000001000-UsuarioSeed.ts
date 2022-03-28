import { USUARIOS } from "./data/catmaeusuario.seed";
import { MigrationInterface, QueryRunner } from "typeorm";
import { Usuario } from "../../../entities/02-personas/catmaeusuario.entity";

export class UsuarioSeed1612000001000 implements MigrationInterface {
  private readonly tableName = "personas.catmaeusuario";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const usuarios: Partial<Usuario>[] = [];

    for (const c of USUARIOS) {
      usuarios.push(c);
    }

    await queryRunner.manager.getRepository(Usuario).save(usuarios);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        usuarios.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Usuario).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
