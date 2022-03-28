import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class HorarioTable1610001013000 implements MigrationInterface {
  private readonly tableName = "talent.catmaehorario";

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
            name: "inicio",
            type: "time",
            isNullable: false,
          },
          {
            name: "fin",
            type: "time",
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
