import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class UpdateOportunidadRelationInActividad1634739201672
  implements MigrationInterface
{
  private readonly tableName = 'crm.catmaeactividad';
  private readonly foreignKey = new TableForeignKey({
    columnNames: ['oportunidad_id'],
    referencedTableName: 'crm.catmaefunnel',
    referencedColumnNames: ['id'],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(this.tableName);
    const fk = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'oportunidad_id'
    );
    await queryRunner.dropForeignKey(this.tableName, fk!);

    await queryRunner.createForeignKey(this.tableName, this.foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(this.tableName);
    const fk = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'oportunidad_id'
    );
    await queryRunner.dropForeignKey(this.tableName, fk!);

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['oportunidad_id'],
        referencedTableName: 'crm.catmaeoportunidad',
        referencedColumnNames: ['id'],
      })
    );
  }
}
