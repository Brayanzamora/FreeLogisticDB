import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class LogoPdfTable1610000000070 implements MigrationInterface {
  private readonly tableName = "commons.catmaelogopdf";

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
            name: "data_uri",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "width",
            type: "int4",
            isNullable: false,
          },
          {
            name: "height",
            type: "int4",
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
