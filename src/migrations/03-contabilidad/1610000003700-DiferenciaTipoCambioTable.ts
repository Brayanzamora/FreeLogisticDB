import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DiferenciaTipoCambioTable1610000003700
  implements MigrationInterface
{
  private readonly tableName = "contabilidad.catmaedifcambio";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["ganancia_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["perdida_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
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
            name: "ganancia_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "perdida_id",
            type: "int4",
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
