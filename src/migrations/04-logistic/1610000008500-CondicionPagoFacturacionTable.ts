import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

enum TipoCondicionPagoFacturacion {
  AVANCE = "AVANCE",
  NETO = "NETO",
}

export class CondicionPagoFacturacionTable1610000008500
  implements MigrationInterface
{
  private readonly tableName = "facturacion.catmaecondicionpago";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["compra_cotizacion_id"],
      referencedTableName: "facturacion.movmaecompracotizacion",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["compraorden_id"],
      referencedTableName: "facturacion.movmaecompraorden",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["venta_cotizacion_id"],
      referencedTableName: "facturacion.movmaeventacotizacion",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["venta_orden_id"],
      referencedTableName: "facturacion.movmaeventaorden",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["facturacompra_id"],
      referencedTableName: "facturacion.movmaefacturacompra",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["ventafactura_id"],
      referencedTableName: "facturacion.movmaeventafactura",
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
            enum: [
              TipoCondicionPagoFacturacion.NETO,
              TipoCondicionPagoFacturacion.AVANCE,
            ],
            isNullable: false,
          },
          {
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "comentarios",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "dias",
            type: "int4",
            isNullable: false,
          },
          {
            name: "porcentaje",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "motivo",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "compra_cotizacion_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "compraorden_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "venta_cotizacion_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "venta_orden_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "facturacompra_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "ventafactura_id",
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
