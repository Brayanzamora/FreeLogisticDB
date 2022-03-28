import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class MesTable1610000000050 implements MigrationInterface {
  private readonly tableName = "commons.catmaemes";

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
            name: "mes",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "nombre",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "active",
            type: "boolean",
            default: true,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
