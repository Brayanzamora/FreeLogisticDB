import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class TipoCambioTable1610000002500 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaetipocambio";

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
            name: "fecha",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "compra",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "venta",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "tipomoneda_id",
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
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ["tipomoneda_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.createUniqueConstraints(this.tableName, [
      new TableUnique({
        name: "UQ_TIPO_CAMBIO_FECHA",
        columnNames: ["fecha", "tipomoneda_id"],
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf("tipomoneda_id") !== -1
    );
    await queryRunner.dropForeignKey(this.tableName, foreignKey);
    await queryRunner.dropTable(this.tableName);
  }
}
