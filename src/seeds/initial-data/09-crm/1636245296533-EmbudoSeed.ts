import { Embudo } from '../../../entities/09-crm/catmaeembudo.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { EMBUDOS } from './data/catmaeembudo.seed';

export class EmbudoSeed1636245296533 implements MigrationInterface {
  private readonly tableName = 'crm.catmaeembudo';
  public async up(queryRunner: QueryRunner): Promise<void> {
    const embudos: Embudo[] = [];

    for (const e of EMBUDOS) {
      embudos.push(e);
    }

    await queryRunner.manager.getRepository(Embudo).save(embudos);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        embudos.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Embudo).delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
