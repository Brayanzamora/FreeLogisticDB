import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class DetalleVentaFacturaTable1610000007100
  implements MigrationInterface
{
  private readonly tableName = "facturacion.movmaeventafacturadet";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["ventafactura_id"],
      referencedTableName: "facturacion.movmaeventafactura",
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
            name: "precio",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "descuento",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "articulo_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "ventafactura_id",
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
