import { Horario } from '../../../entities/05-talent/catmaehorario.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { PERIODOS } from './data/catmaeaperiodo.seed';
import { PeriodoTable1610001003000 } from '../../../migrations/05-talent/1610001003000-PeriodoTable';

export class PeriodoSeed1614000005007 implements MigrationInterface {
  private readonly tableName = 'talent.catmaeperiodo';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const periodos: Partial<Horario>[] = [];

    for (const c of PERIODOS) {
      periodos.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Horario).save(periodos);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        PERIODOS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(PeriodoTable1610001003000)
      .delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
