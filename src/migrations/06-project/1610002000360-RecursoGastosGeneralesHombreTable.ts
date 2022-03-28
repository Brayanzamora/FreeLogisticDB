import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class RecursoGastosGeneralesHombreTable1610002000360
  implements MigrationInterface
{
  private readonly tableName = "project.catmaerecursogastosgeneraleshombre";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["gasto_general_id"],
      referencedTableName: "project.catmaegastosgenerales",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["trabajador_id"],
      referencedTableName: "personas.catmaetrabajador",
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
            name: "precio_unitario",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "cantidad",
            type: "int4",
            default: 0,
            isNullable: false,
          },
          {
            name: "gasto_general_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "trabajador_id",
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
