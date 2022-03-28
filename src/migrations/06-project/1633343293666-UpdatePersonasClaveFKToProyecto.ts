import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class UpdatePersonasClaveFKToProyecto1633343293666
  implements MigrationInterface
{
  private readonly tableName = 'project.catmaeproyecto';
  private readonly newFK = new TableForeignKey({
    columnNames: ['ejecutivodecuenta_id'],
    referencedTableName: 'crm.catmaepersonaclave',
    referencedColumnNames: ['id'],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    let table = await queryRunner.getTable('project.catmaeproyecto');
    const personaClaveFK = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'personaclave_id'
    );
    await queryRunner.dropForeignKey(this.tableName, personaClaveFK!);
    await queryRunner.dropColumn(this.tableName, 'personaclave_id');

    const ejecutivodecuentaFK = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'ejecutivodecuenta_id'
    );
    await queryRunner.dropForeignKey(this.tableName, ejecutivodecuentaFK!);
    await queryRunner.createForeignKey(this.tableName, this.newFK);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'personaclave_id',
        type: 'int4',
        isNullable: true,
      })
    );

    let table = await queryRunner.getTable('project.catmaeproyecto');
    const ejecutivodecuentaFK = table!.foreignKeys.find(
      (x) => x.columnNames[0] === 'ejecutivodecuenta_id'
    );
    await queryRunner.dropForeignKey(this.tableName, ejecutivodecuentaFK!);

    await queryRunner.createForeignKeys(this.tableName, [
      new TableForeignKey({
        columnNames: ['personaclave_id'],
        referencedTableName: 'crm.catmaepersonaclave',
        referencedColumnNames: ['id'],
      }),
      new TableForeignKey({
        columnNames: ['ejecutivodecuenta_id'],
        referencedTableName: 'personas.catmaetrabajador',
        referencedColumnNames: ['id'],
      }),
    ]);
  }
}
