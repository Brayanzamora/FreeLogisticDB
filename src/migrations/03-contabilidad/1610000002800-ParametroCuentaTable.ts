import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ParametroCuentaTable1610000002800 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaeparametrocuenta";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["plancuenta_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta01_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta02_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta03_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta04_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta05_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta06_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta07_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta08_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta09_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta10_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta11_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta12_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta13_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta14_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["origen_id"],
      referencedTableName: "contabilidad.catmaeorigen",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["origen01_id"],
      referencedTableName: "contabilidad.catmaeorigen",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["origen02_id"],
      referencedTableName: "contabilidad.catmaeorigen",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["origen03_id"],
      referencedTableName: "contabilidad.catmaeorigen",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["origen04_id"],
      referencedTableName: "contabilidad.catmaeorigen",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["origen05_id"],
      referencedTableName: "contabilidad.catmaeorigen",
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
            name: "year",
            type: "int4",
            isNullable: false,
          },
          {
            name: "retencion",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "igv",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "honorario",
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
            name: "plancuenta01_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta02_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta03_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta04_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta05_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta06_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta07_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta08_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta09_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta10_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta11_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta12_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta13_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta14_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "origen_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "origen01_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "origen02_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "origen03_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "origen04_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "origen05_id",
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
