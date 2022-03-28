import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class PresupuestoTesoreriaTable1610000004100
  implements MigrationInterface
{
  private readonly tableName = 'contabilidad.catmaepresupuestotesoreria';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['centrocosto_id'],
      referencedTableName: 'contabilidad.catmaecentrocosto',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ["categoria_id"],
      referencedTableName: "facturacion.catmaecategoria",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["subcategoria_id"],
      referencedTableName: "facturacion.catmaesubcategoria",
      referencedColumnNames: ["id"],
    }),
  ];

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
            name: 'year',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'periodo',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'codigo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'nombre',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'centrocosto_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'categoria_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'subcategoria_id',
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

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
