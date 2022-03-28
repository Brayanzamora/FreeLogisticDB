import { AREAS } from './data/catmaearea.seed';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { AreaTable1610001001000 } from '../../../migrations/05-talent/1610001001000-AreaTable';
import { Area } from '../../../entities/05-talent/catmaearea.entity';

export class AreaSeed1614000005001 implements MigrationInterface {
  private readonly tableName = 'talent.catmaearea';

  public async up(queryRunner: QueryRunner): Promise<void> {
    let independentAreas: Area[] = [];
    let dependentAreas: Area[] = [];
    let area: Area[] = [];

    independentAreas = AREAS.filter((area) => area.parent_id === undefined);
    dependentAreas = AREAS.filter((area) => area.parent_id !== undefined);

    // independent areas
    await queryRunner.manager.getRepository(Area).save(independentAreas);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        independentAreas.length + 1
      };`
    );

    // dependent areas
    await queryRunner.manager.getRepository(Area).save(dependentAreas);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        AREAS.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(AreaTable1610001001000).delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
