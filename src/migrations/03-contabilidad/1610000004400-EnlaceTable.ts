import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class EnlaceTable1610000004400 implements MigrationInterface {
  private readonly tableName = "contabilidad.catdetenlace";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["plancuenta_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["balance_id"],
      referencedTableName: "contabilidad.catmaebalance",
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
            name: "formato",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "balance_id",
            type: "int4",
            isNullable: false,
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
