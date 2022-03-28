import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class FeriadoTable1610001011000 implements MigrationInterface {
  private readonly tableName = "talent.catmaeferiado";

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
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fecha",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "estado",
            type: "boolean",
            default: true,
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
