import { Horario } from "../../../entities/05-talent/catmaehorario.entity";
import { HorarioTable1610001013000 } from "../../../migrations/05-talent/1610001013000-HorarioTable";
import { MigrationInterface, QueryRunner } from "typeorm";
import { HORARIOS } from "./data/catmaeahorario.seed";

export class HorarioSeed1614000005006 implements MigrationInterface {
  private readonly tableName = "talent.catmaehorario";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const horarios: Partial<Horario>[] = [];

    for (const c of HORARIOS) {
      horarios.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Horario).save(horarios);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        HORARIOS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(HorarioTable1610001013000)
      .delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
