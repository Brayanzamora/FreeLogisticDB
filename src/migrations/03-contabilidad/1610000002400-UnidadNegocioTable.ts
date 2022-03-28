import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class UnidadNegocioTable1610000002400 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaecentrocosto";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["debe_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["haber_id"],
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
            name: "codigo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "debe_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "haber_id",
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

    await queryRunner.createUniqueConstraints(this.tableName, [
      new TableUnique({
        name: "UQ_COD_NAME",
        columnNames: ["codigo", "nombre"],
      }),
      new TableUnique({
        name: "UQ_NAME",
        columnNames: ["nombre"],
      }),
      new TableUnique({
        name: "UQ_COD",
        columnNames: ["codigo"],
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
