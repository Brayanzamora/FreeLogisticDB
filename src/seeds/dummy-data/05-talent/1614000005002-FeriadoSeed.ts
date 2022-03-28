import { MigrationInterface, QueryRunner } from 'typeorm';
import { Feriado } from '../../../entities/05-talent/catmaeferiado.entity';
import { FeriadoTable1610001011000 } from '../../../migrations/05-talent/1610001011000-FeriadoTable';
import { FERIADOS } from './data/catmaeferiado.seed';

export class FeriadoSeed1614000005002 implements MigrationInterface {
  private readonly tableName = 'talent.catmaeferiado';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const feriados: Partial<Feriado>[] = [];

    for (const c of FERIADOS) {
      feriados.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Feriado).save(feriados);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        FERIADOS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(FeriadoTable1610001011000)
      .delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
