import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class NullableOportunidadInActividad1640507952451
  implements MigrationInterface
{
  private readonly tableName = 'crm.catmaeactividad';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'oportunidad_id',
        type: 'int4',
        isNullable: false,
      }),
      new TableColumn({
        name: 'oportunidad_id',
        type: 'int4',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'oportunidad_id',
        type: 'int4',
        isNullable: true,
      }),
      new TableColumn({
        name: 'oportunidad_id',
        type: 'int4',
        isNullable: false,
      })
    );
  }
}
