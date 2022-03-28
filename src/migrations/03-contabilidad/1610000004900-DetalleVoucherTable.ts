import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DetalleVoucherTable1610000004900 implements MigrationInterface {
  private readonly tableName = "contabilidad.catdetvoucher";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["tipopersona_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipodocumento_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipomoneda_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["entidadfinanciera_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["mediopago_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["cliente_id"],
      referencedTableName: "personas.catmaetipopersona",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["centrocosto_id"],
      referencedTableName: "contabilidad.catmaecentrocosto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["voucher_id"],
      referencedTableName: "contabilidad.catmaevoucher",
      referencedColumnNames: ["id"],
      onDelete: "CASCADE",
    }),
    new TableForeignKey({
      columnNames: ["flujoefectivo_id"],
      referencedTableName: "contabilidad.catmaeflujoefectivo",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
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
            name: "fechdoc",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fechvcto",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "tipopersona_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "cliente_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tipodocumento_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "numero",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "glosa",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "motivoatraso",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "tipomoneda_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tcambio",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "plancuenta_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "mndebe",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "mnhaber",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "medebe",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "mehaber",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "conciliacion",
            type: "varchar",
            default: false,
            isNullable: true,
          },
          {
            name: "distribucion",
            type: "boolean",
            default: false,
            isNullable: true,
          },
          {
            name: "voucher_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "entidadfinanciera_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "mediopago_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "flujoefectivo_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "centrocosto_id",
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
