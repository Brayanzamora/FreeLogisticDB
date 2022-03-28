import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DetalleCompraOrdenTable1610000008000
  implements MigrationInterface
{
  private readonly tableName = "facturacion.movmaecompraordendet";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["recepcion_id"],
      referencedTableName: "facturacion.movmaerecepcion",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["compraorden_id"],
      referencedTableName: "facturacion.movmaecompraorden",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["articulo_id"],
      referencedTableName: "facturacion.catmaeproducto",
      referencedColumnNames: ["id"],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "id",
            type: "int4",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "cantidad",
            type: "int4",
            isNullable: false,
          },
          {
            name: "recibido",
            type: "int4",
            isNullable: true,
          },
          {
            name: "precio",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "descuento",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "articulo_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "compraorden_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "recepcion_id",
            type: "int4",
            isNullable: true,
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
