import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class PresupuestoPartidaTable1610000004200
  implements MigrationInterface
{
  private readonly tableName = "contabilidad.catdetpresupuestopartida";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["presupuesto_id"],
      referencedTableName: "contabilidad.catmaepresupuestotesoreria",
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
            name: "periodo",
            type: "int4",
            isNullable: false,
          },
          {
            name: "inicial",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "codigo",
            type: "varchar",
            isNullable: false,
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
