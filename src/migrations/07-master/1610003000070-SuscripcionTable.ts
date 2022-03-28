import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class SuscripcionTable1610003000070 implements MigrationInterface {
  private readonly tableName = "master.catmaesuscripcion";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["plan_id"],
      referencedTableName: "master.catmaeplan",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["empresa_id"],
      referencedTableName: "master.catmaeempresa",
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
            name: "inicio",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fin",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "plan_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "empresa_id",
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
