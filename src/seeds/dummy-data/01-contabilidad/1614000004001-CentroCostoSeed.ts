import { CentroCosto } from '../../../entities/03-contabiliad/catmaecentrocosto.entity';
import { UnidadNegocioTable1610000002400 } from '../../../migrations/03-contabilidad/1610000002400-UnidadNegocioTable';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { CENTRO_COSTOS } from './data/catmaecentrocosto.seed';

export class CentroCostoSeed1614000001001 implements MigrationInterface {
  private readonly tableName = 'contabilidad.catmaecentrocosto';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const centroCostos: Partial<CentroCosto>[] = [];

    for (const c of CENTRO_COSTOS) {
      centroCostos.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(CentroCosto).save(centroCostos);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        CENTRO_COSTOS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(UnidadNegocioTable1610000002400)
      .delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
