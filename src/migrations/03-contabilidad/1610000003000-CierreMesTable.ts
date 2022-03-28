import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CierreMesTable1610000003000 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaecierremes";

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
            name: "year",
            type: "int4",
            isNullable: false,
          },
          {
            name: "mes",
            type: "int4",
            isNullable: false,
          },
          {
            name: "compra",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "venta",
            type: "decimal",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
