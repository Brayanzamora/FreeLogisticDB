import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum TipoCondicionPago {
  AVANCE = "AVANCE",
  NETO = "NETO",
}

export class CondicionPagoTable1610002000160 implements MigrationInterface {
  private readonly tableName = "project.catmaecondicionpago";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["cotizacion_id"],
      referencedTableName: "project.catmaecotizacion",
      referencedColumnNames: ["id"],
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    }),
    new TableForeignKey({
      columnNames: ["responsable_id"],
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
            name: "tipo_condicion_pago",
            type: "enum",
            enum: [TipoCondicionPago.AVANCE, TipoCondicionPago.NETO],
            isNullable: true,
          },
          {
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "descripcion",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "porcentaje",
            type: "int4",
            isNullable: false,
          },
          {
            name: "responsable_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "cotizacion_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "fecha_desembolso",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "motivo",
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

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
