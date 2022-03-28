import { MigrationInterface, QueryRunner } from 'typeorm';
import { Razon } from '../../../entities/05-talent/catmaerazon.entity';
import { RAZONES } from './data/catmaerazon.seed';
import { RazonTable1610001015000 } from '../../../migrations/05-talent/1610001015000-RazonTable';

export class RazonSeed1614000005003 implements MigrationInterface {
  private readonly tableName = 'talent.catmaerazon';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const razones: Partial<Razon>[] = [];

    for (const c of RAZONES) {
      razones.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Razon).save(razones);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        RAZONES.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(RazonTable1610001015000).delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
