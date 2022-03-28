import { ELEMENTO_GRUPO } from './data/catdetelementogrupo.seed';
import { DetalleElementoGrupo } from '../../../entities/01-commons/catdetelementogrupo.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class DetalleElementoGrupoSeed1630083318893
  implements MigrationInterface
{
  private readonly tableName = 'commons.catdetelementogrupo';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const detalleElementoGrupo: Partial<DetalleElementoGrupo>[] = [];

    for (const c of ELEMENTO_GRUPO) {
      detalleElementoGrupo.push({ ...c, flag: true });
    }

    await queryRunner.manager
      .getRepository(DetalleElementoGrupo)
      .save(detalleElementoGrupo);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        DetalleElementoGrupo.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(DetalleElementoGrupo).delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
