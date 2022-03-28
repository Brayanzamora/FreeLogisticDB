import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  TableColumn,
} from 'typeorm';

export class AlterPresupuestoTesoreriaCentroCosto1631901895052
  implements MigrationInterface
{
  private readonly tableName = 'contabilidad.catmaepresupuestotesoreria';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('centrocosto_id') !== -1
    );
    await queryRunner.dropForeignKey(this.tableName, foreignKey);
    // await queryRunner.dropForeignKey(
    //   this.tableName,
    //   // new TableForeignKey({
    //   //   columnNames: ["centrocosto_id"],
    //   //   referencedTableName: "contabilidad.catmaecentrocosto",
    //   //   referencedColumnNames: ["id"],
    //   // })
    //   "FK_b0254a72d133f35ccf6e9dd0f68"
    // );

    await queryRunner.changeColumn(
      this.tableName,
      'centrocosto_id',
      new TableColumn({
        name: 'undnegocio_id',
        type: 'int4',
        isNullable: false,
      })
    );

    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'centrocosto_id',
        type: 'int4',
        isNullable: false,
      })
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['centrocosto_id'],
        referencedTableName: 'commons.catdetcompendio',
        referencedColumnNames: ['id'],
      })
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['undnegocio_id'],
        referencedTableName: 'contabilidad.catmaecentrocosto',
        referencedColumnNames: ['id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['undnegocio_id'],
        referencedTableName: 'contabilidad.catmaecentrocosto',
        referencedColumnNames: ['id'],
      })
    );
    await queryRunner.dropForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['centrocosto_id'],
        referencedTableName: 'commons.catmaecentrocosto',
        referencedColumnNames: ['id'],
      })
    );

    await queryRunner.dropColumn(
      this.tableName,
      new TableColumn({
        name: 'centrocosto_id',
        type: 'int4',
        isNullable: false,
      })
    );

    await queryRunner.changeColumn(
      this.tableName,
      'undnegocio_id',
      new TableColumn({
        name: 'centrocosto_id',
        type: 'int4',
        isNullable: false,
      })
    );
  }
}
