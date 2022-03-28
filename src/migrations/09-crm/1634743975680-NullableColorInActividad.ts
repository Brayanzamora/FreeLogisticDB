import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class NullableColorInActividad1634743975680
  implements MigrationInterface
{
  private readonly tableName = 'crm.catmaeactividad';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns(this.tableName, [
      {
        oldColumn: new TableColumn({
          name: 'color',
          type: 'varchar',
          isNullable: false,
        }),
        newColumn: new TableColumn({
          name: 'color',
          type: 'varchar',
          isNullable: true,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'tipocontacto_id',
          type: 'int4',
          isNullable: false,
        }),
        newColumn: new TableColumn({
          name: 'tipocontacto_id',
          type: 'int4',
          isNullable: true,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'colaborador_id',
          type: 'int4',
          isNullable: false,
        }),
        newColumn: new TableColumn({
          name: 'colaborador_id',
          type: 'int4',
          isNullable: true,
        }),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns(this.tableName, [
      {
        oldColumn: new TableColumn({
          name: 'color',
          type: 'varchar',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'color',
          type: 'varchar',
          isNullable: false,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'tipocontacto_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'tipocontacto_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'colaborador_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'colaborador_id',
          type: 'int4',
          isNullable: false,
        }),
      },
    ]);
  }
}
