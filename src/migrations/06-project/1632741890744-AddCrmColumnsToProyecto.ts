import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddCrmColumnsToProyecto1632741890744
  implements MigrationInterface
{
  private readonly tableName = 'project.catmaeproyecto';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['funnel_id'],
      referencedTableName: 'crm.catmaefunnel',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['cliente_id'],
      referencedTableName: 'crm.catmaecontacto',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['personaclave_id'],
      referencedTableName: 'crm.catmaepersonaclave',
      referencedColumnNames: ['id'],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    let table = await queryRunner.getTable('project.catmaeproyecto');
    const fk = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'cliente_id'
    );
    await queryRunner.dropForeignKey(this.tableName, fk!);

    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: 'funnel_id',
        type: 'int4',
        isNullable: true,
      }),
      new TableColumn({
        name: 'personaclave_id',
        type: 'int4',
        isNullable: true,
      }),
    ]);

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropColumn(this.tableName, 'funnel_id');
    await queryRunner.dropColumn(this.tableName, 'personaclave_id');

    let table = await queryRunner.getTable('project.catmaeproyecto');
    const fk = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'cliente_id'
    );
    await queryRunner.createForeignKey(this.tableName, fk!);
  }
}
