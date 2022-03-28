import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class OrigenTable1610000002600 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaeorigen";

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
            name: "codigo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "descripcion",
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

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "COD_NAME",
        columnNames: ["codigo", "descripcion"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
