import { HistorialArea } from '../../../entities/05-talent/catdethistorialarea.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { HISTORIAL_AREA } from './data/catmaehistorialarea.seed';

export class HistorialAreaSeed1614000006010 implements MigrationInterface {
  private readonly tableName = 'talent.catdethistorialarea';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const historialAreas: Partial<HistorialArea>[] = [];

    for (const c of HISTORIAL_AREA) {
      historialAreas.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(HistorialArea).save(historialAreas);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        HISTORIAL_AREA.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(HistorialArea).delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
