import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class VentaFacturaTable1610000007000 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaeventafactura";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["moneda_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["estado_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["responsable_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["cliente_id"],
      referencedTableName: "personas.catmaecliente",
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
            name: "codigo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "glosageneral",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fechadocumento",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fechaentrega",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fechacontabilizacion",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "responsable_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "cargo", //cargo del trabajador
            type: "int4",
            isNullable: false,
          },
          {
            name: "descuento",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "redondeo",
            type: "boolean",
            default: false,
            isNullable: true,
          },
          {
            name: "comentarios",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cliente_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "moneda_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "estado_id",
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

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_CODIGO_VENTA_FACTURA",
        columnNames: ["codigo"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
