import { MigrationInterface, QueryRunner } from 'typeorm';
import { HISTORIAL_ROL } from './data/catmaehistorialrol.seed';
import { HistorialRol } from '../../../entities/05-talent/catdethistorialrol.entity';

export class HistorialRolSeed1614000006011 implements MigrationInterface {
  private readonly tableName = 'talent.catdethistorialrol';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const historialRols: Partial<HistorialRol>[] = [];

    for (const c of HISTORIAL_ROL) {
      historialRols.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(HistorialRol).save(historialRols);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        HISTORIAL_ROL.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(HistorialRol).delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
