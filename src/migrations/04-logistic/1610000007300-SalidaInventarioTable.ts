import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class SalidaInventarioTable1610000007300 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaesalidainventario";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["cliente_id"],
      referencedTableName: "personas.catmaecliente",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["salida_id"],
      referencedTableName: "facturacion.movmaesalida",
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
            name: "codigo",
            type: "int4",
            isNullable: false,
          },
          {
            name: "cliente_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "salida_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "flag",
            type: "boolean",
            default: true,
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
