import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AnhoTable1610000000030 implements MigrationInterface {
  private readonly tableName = "commons.catmaeanho";

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
            name: "anho",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "active",
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
