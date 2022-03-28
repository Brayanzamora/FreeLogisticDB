import { Etapa } from '../../../entities/09-crm/catmaeetapa.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { ETAPAS } from './data/catmaeetapa.seed';

export class EtapaSeed1636245289441 implements MigrationInterface {
  private readonly tableName = 'crm.catmaeetapa';
  public async up(queryRunner: QueryRunner): Promise<void> {
    const etapas: Etapa[] = [];

    for (const e of ETAPAS) {
      etapas.push(e);
    }

    await queryRunner.manager.getRepository(Etapa).save(etapas);
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        etapas.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Etapa).delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
