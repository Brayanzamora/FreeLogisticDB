import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PeriodoVacacionesTable1610001021000 implements MigrationInterface {
  private readonly tableName = "talent.catmaeperiodovacaciones";

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
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fin",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "estado",
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
