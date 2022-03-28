import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class DeleteColumPeriodoTable1610001037000
  implements MigrationInterface
{
  private readonly tableName = 'talent.catmaeperiodo';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} DROP COLUMN "parent_id";`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} ADD "parent_id" int4 NULL;`
    ); // reverts things made in "up" method
  }
}
