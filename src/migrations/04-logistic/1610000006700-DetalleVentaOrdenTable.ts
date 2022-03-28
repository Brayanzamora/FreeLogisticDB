import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DetalleVentaOrdenTable1610000006700 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaeventaordendet";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["articulo_id"],
      referencedTableName: "facturacion.catmaeproducto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["ventaorden_id"],
      referencedTableName: "facturacion.movmaeventaorden",
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
            name: "ventaorden_id",
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
