import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum TipoContrato {
  ORDENVENTA = "ORDENVENTA",
  FACTURA = "FACTURA",
}

export class ReclamoTable1610005002100 implements MigrationInterface {
  private readonly tableName = "crm.catmaereclamo";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["cliente_id"],
      referencedTableName: "personas.catmaecliente",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["responsable_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["estadoreclamo_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tiporeclamo_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["facturaventa_id"],
      referencedTableName: "facturacion.movmaeventafactura",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["ordenventa_id"],
      referencedTableName: "facturacion.movmaeventaorden",
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
            name: "cliente_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tipo_contrato",
            type: "enum",
            enum: [TipoContrato.ORDENVENTA, TipoContrato.FACTURA],
            isNullable: false,
          },
          {
            name: "ordenventa_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "facturaventa_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tiporeclamo_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "comentario",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fecha",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "responsable_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "estadoreclamo_id",
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
