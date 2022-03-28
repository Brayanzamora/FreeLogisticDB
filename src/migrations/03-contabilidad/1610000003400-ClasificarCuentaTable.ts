import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class ClasificarCuentaTable1610000003400 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaeclasificarcuenta";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["concepto_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["epg_id"],
      referencedTableName: "contabilidad.catmaeepg",
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
            name: "costos",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "flag",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "concepto_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "epg_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta_id",
            type: "int4",
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);

    queryRunner.createUniqueConstraints(this.tableName, [
      new TableUnique({
        name: "UQ_PLANCUENTA",
        columnNames: ["plancuenta_id"],
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
