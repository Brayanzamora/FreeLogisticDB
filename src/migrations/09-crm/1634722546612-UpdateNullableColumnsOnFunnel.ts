import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateNullableColumnsOnFunnel1634722546612
  implements MigrationInterface
{
  private readonly tableName = 'crm.catmaefunnel';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns(this.tableName, [
      {
        newColumn: new TableColumn({
          name: 'oportunidad_id',
          type: 'int4',
          isNullable: true,
        }),
        oldColumn: new TableColumn({
          name: 'oportunidad_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        newColumn: new TableColumn({
          name: 'moneda_id',
          type: 'int4',
          isNullable: true,
        }),
        oldColumn: new TableColumn({
          name: 'moneda_id',
          type: 'int4',
          isNullable: false,
        }),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns(this.tableName, [
      {
        oldColumn: new TableColumn({
          name: 'oportunidad_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'oportunidad_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'moneda_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'moneda_id',
          type: 'int4',
          isNullable: false,
        }),
      },
    ]);
  }
}
