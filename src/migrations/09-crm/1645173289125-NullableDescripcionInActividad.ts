import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class NullableDescripcionInActividad1645173289125
  implements MigrationInterface
{
  private readonly tableName = 'crm.catmaeactividad';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'descripcion',
        type: 'varchar',
        isNullable: false,
      }),
      new TableColumn({
        name: 'descripcion',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'descripcion',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'descripcion',
        type: 'varchar',
        isNullable: false,
      })
    );
  }
}
