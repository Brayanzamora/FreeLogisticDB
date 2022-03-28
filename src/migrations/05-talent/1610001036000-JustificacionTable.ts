import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class JustificacionTable1610001036000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaejustificacion';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} RENAME COLUMN "tipo_maximo_id" TO "tipo_maximo";
      ALTER TABLE ${this.tableName} RENAME COLUMN "maximo_cantidad_id" TO "maximo_cantidad";`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} RENAME COLUMN "tipo_maximo" TO "tipo_maximo_id";
      ALTER TABLE ${this.tableName} RENAME COLUMN "maximo_cantidad_id" TO "maximo_cantidad";`
    ); // reverts things made in "up" method
  }
}
