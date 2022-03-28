import { PERSONAS } from "./data/catmaepersona.seed";
import { MigrationInterface, QueryRunner } from "typeorm";
import { Persona } from "../../../entities/02-personas/catmaepersona.entity";

export class PersonasSeed1614000001000 implements MigrationInterface {
  private readonly tableName = "personas.catmaepersona";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const personas: Partial<Persona>[] = [];

    for (const c of PERSONAS) {
      personas.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Persona).save(personas);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        PERSONAS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Persona).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
