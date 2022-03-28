import { MigrationInterface, QueryRunner } from 'typeorm';
import { LogoPdf } from '../../../entities/01-commons/catmaelogopdf.entity';
import { LOGO_PDF } from './data/catmaelogopdf.seed';

export class LogoPDFSeed1612000000500 implements MigrationInterface {
  private readonly tableName = 'commons.catmaelogopdf';

  public async up(queryRunner: QueryRunner): Promise<void> {
    let logoPDF: Partial<LogoPdf>[] = [];

    logoPDF = LOGO_PDF;

    await queryRunner.manager.getRepository(LogoPdf).save(logoPDF);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        logoPDF.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(LogoPdf).delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
