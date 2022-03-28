import { Justificacion } from '../../../entities/05-talent/catmaejustificacion.entity';
import { JustificacionTable1610001016000 } from '../../../migrations/05-talent/1610001016000-JustificacionTable';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { JUSTIFICACIONES } from './data/catmaejustificacion.seed';

export class JustificacionSeed1614000005004 implements MigrationInterface {
  private readonly tableName = 'talent.catmaejustificacion';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const justificaciones: Partial<Justificacion>[] = [];

    for (const c of JUSTIFICACIONES) {
      justificaciones.push({ ...c, flag: true });
    }

    await queryRunner.manager
      .getRepository(Justificacion)
      .save(justificaciones);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        JUSTIFICACIONES.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(JustificacionTable1610001016000)
      .delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
