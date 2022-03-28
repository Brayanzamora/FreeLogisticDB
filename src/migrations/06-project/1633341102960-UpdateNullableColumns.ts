import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateNullableColumns1633341102960 implements MigrationInterface {
  private readonly tableName = 'project.catmaeproyecto';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns(this.tableName, [
      {
        oldColumn: new TableColumn({
          name: 'undnegocio_id',
          type: 'int4',
          isNullable: false,
        }),
        newColumn: new TableColumn({
          name: 'undnegocio_id',
          type: 'int4',
          isNullable: true,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'categoria_id',
          type: 'int4',
          isNullable: false,
        }),
        newColumn: new TableColumn({
          name: 'categoria_id',
          type: 'int4',
          isNullable: true,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'subcategoria_id',
          type: 'int4',
          isNullable: false,
        }),
        newColumn: new TableColumn({
          name: 'subcategoria_id',
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
          name: 'undnegocio_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'undnegocio_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'categoria_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'categoria_id',
          type: 'int4',
          isNullable: false,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'subcategoria_id',
          type: 'int4',
          isNullable: true,
        }),
        newColumn: new TableColumn({
          name: 'subcategoria_id',
          type: 'int4',
          isNullable: false,
        }),
      },
    ]);
  }
}
