import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class EstadosFinancierosTable1610000003200
  implements MigrationInterface
{
  private readonly tableName = "contabilidad.catmaeeeff";

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
            name: "month",
            type: "int4",
            isNullable: false,
          },
          {
            name: "mndebe",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "mnhaber",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "medebe",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "mehaber",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "plancuenta_id",
            type: "int4",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
