import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DetallePresupuestoTesoreriaTable1610000004300
  implements MigrationInterface
{
  private readonly tableName = "contabilidad.catdetpresupuestotesoreria";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["presupuesto_id"],
      referencedTableName: "contabilidad.catdetpresupuestopartida",
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
            name: "periodo1",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo2",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo3",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo4",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo5",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo6",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo7",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo8",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo9",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo10",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo11",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo12",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo13",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo14",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo15",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo16",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo17",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo18",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo19",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo20",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo21",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo22",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo23",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo24",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo25",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo26",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo27",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo28",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo29",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo30",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo31",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo32",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo33",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo34",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo35",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo36",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo37",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo38",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo39",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo40",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo41",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo42",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo43",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo44",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo45",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo46",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo47",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo48",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo49",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo50",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo51",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "periodo52",
            type: "decimal",
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
