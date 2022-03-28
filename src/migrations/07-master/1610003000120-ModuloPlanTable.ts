import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ModuloPlanTable1610003000120 implements MigrationInterface {
  private readonly tableName = "master.segdetmoduloplan";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["modulo_id"],
      referencedTableName: "master.catmaemodulo",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plan_id"],
      referencedTableName: "master.catmaeplan",
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
            name: "modulo_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plan_id",
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
