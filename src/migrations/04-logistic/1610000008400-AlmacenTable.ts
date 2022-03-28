import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class AlmacenTable1610000008400 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaealmacen";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["articulo_id"],
      referencedTableName: "facturacion.catmaeproducto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["bodega_id"],
      referencedTableName: "facturacion.catmaebodega",
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
            name: "fecha",
            type: "timestamp",
            isNullable: false,
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
            name: "total",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "articulo_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "bodega_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "flag",
            type: "boolean",
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
