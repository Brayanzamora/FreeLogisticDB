import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class OrigenVoucherTable1610000003600 implements MigrationInterface {
  private readonly tableName = "contabilidad.catdetorigenvoucher";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["tipovoucher_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["origen_id"],
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
            name: "flag",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "tipovoucher_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "origen_id",
            type: "int4",
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
