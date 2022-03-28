import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DespachoTable1610000006300 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaedespacho";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["condicion_pago_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipo_despacho_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["und_negocio_id"],
      referencedTableName: "contabilidad.catmaecentrocosto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["trabajador_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["salida_id"],
      referencedTableName: "facturacion.movmaesalida",
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
            name: "documento",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nombre_cliente",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fecha",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "direccion",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "condicion_pago_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "und_negocio_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "trabajador_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "tipo_despacho_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "salida_id",
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
