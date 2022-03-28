import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class UpdateReclamoTable1636104787679 implements MigrationInterface {
  private readonly tableName = 'crm.catmaereclamo';
  public async up(queryRunner: QueryRunner): Promise<void> {
    // drop foreign keys
    const table = await queryRunner.getTable(this.tableName);
    const ordenVentaFK = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'ordenventa_id'
    );
    const facturaVentaFK = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'facturaventa_id'
    );
    await queryRunner.dropForeignKey(this.tableName, ordenVentaFK!);
    await queryRunner.dropForeignKey(this.tableName, facturaVentaFK!);

    await queryRunner.dropColumn(this.tableName, 'ordenventa_id');
    await queryRunner.dropColumn(this.tableName, 'facturaventa_id');
    await queryRunner.dropColumn(this.tableName, 'tipo_contrato');

    const clienteFK = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'cliente_id'
    );
    await queryRunner.dropForeignKey(this.tableName, clienteFK!);

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['cliente_id'],
        referencedTableName: 'crm.catmaecontacto',
        referencedColumnNames: ['id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(this.tableName);

    const clienteFK = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'cliente_id'
    );
    await queryRunner.dropForeignKey(this.tableName, clienteFK!);

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['cliente_id'],
        referencedTableName: 'personas.catmaecliente',
        referencedColumnNames: ['id'],
      })
    );
  }
}
