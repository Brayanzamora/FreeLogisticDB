import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddCentroCostoColumnToTrabajadorTable1633121686762
  implements MigrationInterface
{
  private readonly tableName = 'personas.catmaetrabajador';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['centrocosto_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    }),
  ];
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: 'centrocosto_id',
        type: 'int4',
        isNullable: true,
      }),
    ]);

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(this.tableName);
    if (table) {
      const foreignKeyCentroCosto = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf('centrocosto_id') !== -1
      );
      if (foreignKeyCentroCosto) {
        await queryRunner.dropForeignKey(this.tableName, foreignKeyCentroCosto);
      }
    }
    await queryRunner.dropTable(this.tableName);
  }
}
