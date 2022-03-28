import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  TableColumn,
} from 'typeorm';

export class AlterDocumentosCentroCosto1631901893052
  implements MigrationInterface
{
  private readonly tableName = 'contabilidad.catmaedocumentos';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      "FK_2dde778029a301f603677d07b0e"
      // new TableForeignKey({
      //   columnNames: ["centrocosto_id"],
      //   referencedTableName: "contabilidad.catmaecentrocosto",
      //   referencedColumnNames: ["id"],
      // })
    );

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
