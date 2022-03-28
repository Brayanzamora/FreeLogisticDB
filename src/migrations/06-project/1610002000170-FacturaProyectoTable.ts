import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum CumplimientoFactura {
  BAJO = "BAJO",
  MEDIO = "MEDIO",
  ALTO = "ALTO",
  NO_REGISTRADO = "NO_REGISTRADO",
}

export class FacturaProyectoTable1610002000170 implements MigrationInterface {
  private readonly tableName = "project.catmaefacturaproyecto";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["condicionpago_id"],
      referencedTableName: "project.catmaecondicionpago",
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
            name: "cumplimiento",
            type: "enum",
            enum: [
              CumplimientoFactura.BAJO,
              CumplimientoFactura.MEDIO,
              CumplimientoFactura.ALTO,
              CumplimientoFactura.NO_REGISTRADO,
            ],
            isNullable: false,
          },
          {
            name: "dias_retraso",
            type: "int4",
            isNullable: true,
          },
          {
            name: "motivo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "condicionpago_id",
            type: "int4",
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

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
