import { ACTIVIDAD_ESTADO_TAREA } from "./data/catmaeactividadestadotarea.seed";
import { MigrationInterface, QueryRunner } from "typeorm";
import { Actividadestadotarea } from "../../../entities/06-project/catmaeactividadestadotarea.entity";

export class ActividadEstadoTareaSeed1613000006000 implements MigrationInterface {
  private readonly tableName = "project.catmaeactividadestadotarea";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const actividadestado: Partial<Actividadestadotarea>[] = [];

    for (const c of ACTIVIDAD_ESTADO_TAREA) {
      actividadestado.push(c);
    }

    await queryRunner.manager.getRepository(Actividadestadotarea).save(actividadestado);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        actividadestado.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Actividadestadotarea).delete("");
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
