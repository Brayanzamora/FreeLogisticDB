import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DetallePresupuestoEconomicoTable1610000004000
  implements MigrationInterface
{
  private readonly tableName = "contabilidad.catdetpresupuestoeconomico";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["presupuesto_id"],
      referencedTableName: "contabilidad.catmaepresupuestoeconomico",
      referencedColumnNames: ["id"],
    }),
  ];

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
            name: "tipo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "descripcion",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "enero",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "febrero",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "marzo",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "abril",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "mayo",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "junio",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "julio",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "agosto",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "septiembre",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "octubre",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "noviembre",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "diciembre",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "presupuesto_id",
            type: "int4",
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

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
