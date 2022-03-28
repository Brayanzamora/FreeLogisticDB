import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class EpgTable1610000003100 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaeepg";

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
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "formula",
            type: "varchar",
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

    queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_CODIGO_ESTADO_PERDIDA_GANANCIA",
        columnNames: ["codigo"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
