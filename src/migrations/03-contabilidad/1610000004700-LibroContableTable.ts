import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class LibroContableTable1610000004700 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaelibrocontable";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["tipodocumento_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipodocref_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipomoneda_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["cliente_id"],
      referencedTableName: "personas.catmaetipopersona",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["voucher_id"],
      referencedTableName: "contabilidad.catmaevoucher",
      referencedColumnNames: ["id"],
      onDelete: "CASCADE",
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
            name: "fecha",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "libro",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "fechvcto",
            type: "timestamp",
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
            name: "tc",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "bi_a", // base imponible
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "igv_a", // impuesto
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "bi_b", // base imponible
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "igv_b", // impuesto
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "bi_c", // base imponible
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "igv_c", // impuesto
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "isc", // impuesto
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "otros", // impuesto
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "total", // impuesto
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "fech_ref",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "numero_ref",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "fechdet",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "numdet", // numero detraccion
            type: "varchar",
            isNullable: true,
          },
          {
            name: "destino",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "tasadet",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "indicador",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "baseimponible",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "igv",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "adqnogravadas",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "exportacion",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "exonerado",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "inafecto",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "retencion",
            type: "int4",
            isNullable: true,
          },
          {
            name: "tiporenta",
            type: "int4",
            isNullable: true,
          },
          {
            name: "tipobien",
            type: "int4",
            isNullable: true,
          },
          {
            name: "convenio",
            type: "int4",
            isNullable: true,
          },
          {
            name: "modalidad",
            type: "int4",
            isNullable: true,
          },
          {
            name: "aporte",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "rethon",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "comision",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "seguro",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "impret",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "tipodocumento_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "tipodocref_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "tipomoneda_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "cliente_id", // tipo personas
            type: "int4",
            isNullable: true,
          },
          {
            name: "voucher_id",
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
