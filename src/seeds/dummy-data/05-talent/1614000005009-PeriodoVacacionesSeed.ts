import { PeriodoVacaciones } from '../../../entities/05-talent/catmaeperiodovacaciones.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { PERIODOS_VACACIONES } from './data/catmaeaperiodovacaciones.seed';
import { PeriodoVacacionesTable1610001021000 } from '../../../migrations/05-talent/1610001021000-PeriodoVacacionesTable';

export class PeriodoVacacionesSeed1614000005009 implements MigrationInterface {
  private readonly tableName = 'talent.catmaeperiodovacaciones';

  public async up(queryRunner: QueryRunner): Promise<void> {
    let periodosVacaciones: Partial<PeriodoVacaciones>[] = [];

    periodosVacaciones = PERIODOS_VACACIONES;

    await queryRunner.manager
      .getRepository(PeriodoVacaciones)
      .save(periodosVacaciones);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        PERIODOS_VACACIONES.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(PeriodoVacacionesTable1610001021000)
      .delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
