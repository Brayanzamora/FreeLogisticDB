import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddPersonaContactoToVentaCotizacion1634633679880
  implements MigrationInterface
{
  private readonly tableName = 'facturacion.movmaeventacotizacion';

  private readonly foreignKey: TableForeignKey = new TableForeignKey({
    columnNames: ['personacontacto_id'],
    referencedTableName: 'crm.catmaepersonaclave',
    referencedColumnNames: ['id'],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'personacontacto_id',
        type: 'int4',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(this.tableName, this.foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.tableName, this.foreignKey);
    await queryRunner.dropColumn(this.tableName, 'personacontacto_id');
  }
}
