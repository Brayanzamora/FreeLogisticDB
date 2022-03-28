import { MigrationInterface, QueryRunner } from 'typeorm';

// La validación de nombres duplicados está a nivel de backend
// Para talent desean que si no es visible se pueda registrar nuevamente (lo eliminado no lo actualizaré y quedará como histórico)
export class UpdateDetalleCompendio1632690502458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query(
      `ALTER TABLE commons.catdetcompendio DROP CONSTRAINT "UQ_NAMES";`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query(
      `ALTER TABLE commons.catdetcompendio ADD CONSTRAINT "UQ_NAMES" UNIQUE (nombre,compendio_id);`
    );
  }
}
