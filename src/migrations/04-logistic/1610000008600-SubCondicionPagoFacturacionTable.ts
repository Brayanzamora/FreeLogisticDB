import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class SubCondicionPagoFaturacionTable1610000008600
  implements MigrationInterface
{
  private readonly tableName = "facturacion.catmaesubcondicionpago";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["condicion_pago_id"],
      referencedTableName: "facturacion.catmaecondicionpago",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plazo_pago_id"],
      referencedTableName: "commons.catdetcompendio",
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
            name: "cuota_porcentaje",
            type: "decimal",
            precision: 9,
            default: 3,
            isNullable: true,
          },
          {
            name: "condicion_pago_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plazo_pago_id",
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
