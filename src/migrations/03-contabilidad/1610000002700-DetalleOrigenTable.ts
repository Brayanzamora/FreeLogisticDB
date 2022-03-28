import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class DetalleOrigenTable1610000002700 implements MigrationInterface {
  private readonly tableName = "contabilidad.catdetorigen";

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
            name: "enero",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "febrero",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "marzo",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "abril",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "mayo",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "junio",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "julio",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "agosto",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "septiembre",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "octubre",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "noviembre",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "diciembre",
            type: "int4",
            default: 0,
            isNullable: false,
          },

          {
            name: "origen_id",
            type: "int4",
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ["origen_id"],
        referencedTableName: "contabilidad.catmaeorigen",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "YEAR_ORIGEN",
        columnNames: ["origen_id", "year"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
