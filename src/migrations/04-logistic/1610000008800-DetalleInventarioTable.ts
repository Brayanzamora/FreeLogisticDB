import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DetalleInventarioTable1610000008800 implements MigrationInterface {
  private readonly tableName = "facturacion.movdetinventario";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["articulo_id"],
      referencedTableName: "facturacion.catmaeproducto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["inventario_id"],
      referencedTableName: "facturacion.movmaeinventario",
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
            isNullable: false,
          },
          {
            name: "precio",
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
            name: "inventario_id",
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
