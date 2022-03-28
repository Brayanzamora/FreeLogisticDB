import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddCrmColumnsToVentaCotizacion1634466083654
  implements MigrationInterface
{
  private readonly tableName = 'facturacion.movmaeventacotizacion';

  private readonly foreignKeys: TableForeignKey[] = [
    new TableForeignKey({
      columnNames: ['oportunidad_id'],
      referencedTableName: 'crm.catmaefunnel',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['cliente_id'],
      referencedTableName: 'crm.catmaecontacto',
      referencedColumnNames: ['id'],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    let table = await queryRunner.getTable(this.tableName);
    const fk = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'cliente_id'
    );
    await queryRunner.dropForeignKey(this.tableName, fk!);

    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'oportunidad_id',
        type: 'int4',
        isNullable: false,
      })
    );

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropColumn(this.tableName, 'oportunidad_id');

    let table = await queryRunner.getTable(this.tableName);
    const fk = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'cliente_id'
    );
    await queryRunner.createForeignKey(this.tableName, fk!);
  }
}
