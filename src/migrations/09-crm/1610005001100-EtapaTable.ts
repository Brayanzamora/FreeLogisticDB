import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class EtapaTable1610005001100 implements MigrationInterface {
  private readonly tableName = "crm.catmaeetapa";

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
            name: "order",
            type: "int4",
            isNullable: true,
          },
          {
            name: "name",
            type: "varchar",
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
