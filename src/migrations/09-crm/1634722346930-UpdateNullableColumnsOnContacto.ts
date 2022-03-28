import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateNullableColumnsOnContacto1634722346930
  implements MigrationInterface
{
  private readonly tableName = 'crm.catdetcontacto';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns(this.tableName, [
      {
        newColumn: new TableColumn({
          name: 'pais_id',
          type: 'int4',
          isNullable: true,
        }),
        oldColumn: new TableColumn({
          name: 'pais_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        newColumn: new TableColumn({
          name: 'departamento_id',
          type: 'int4',
          isNullable: true,
        }),
        oldColumn: new TableColumn({
          name: 'departamento_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        newColumn: new TableColumn({
          name: 'provincia_id',
          type: 'int4',
          isNullable: true,
        }),
        oldColumn: new TableColumn({
          name: 'provincia_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        newColumn: new TableColumn({
          name: 'distrito_id',
          type: 'int4',
          isNullable: true,
        }),
        oldColumn: new TableColumn({
          name: 'distrito_id',
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
          name: 'pais_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'pais_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'departamento_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'departamento_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'provincia_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'provincia_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'distrito_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'distrito_id',
          type: 'int4',
          isNullable: false,
        }),
      },
    ]);
  }
}
