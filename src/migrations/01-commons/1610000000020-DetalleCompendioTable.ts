import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from 'typeorm';

export class DetalleCompendioTable1610000000020 implements MigrationInterface {
  private readonly tableName = 'commons.catdetcompendio';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'codigo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nombre',
            type: 'varchar',
            length: '40',
            isNullable: false,
          },
          {
            name: 'abbr',
            type: 'varchar',
            length: '8',
            isNullable: true,
          },
          {
            name: 'orden',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'color',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'compendio_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'flag',
            type: 'boolean',
            default: true,
            isNullable: false,
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['compendio_id'],
        referencedTableName: 'commons.catmaecompendio',
        referencedColumnNames: ['id'],
      })
    );

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: 'UQ_NAMES',
        columnNames: ['nombre', 'compendio_id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('compendio_id') !== -1
    );
    await queryRunner.dropForeignKey(this.tableName, foreignKey);
    await queryRunner.dropTable(this.tableName);
  }
}
