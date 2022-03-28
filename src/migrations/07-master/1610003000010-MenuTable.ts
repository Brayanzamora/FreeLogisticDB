import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class MenuTable1610003000010 implements MigrationInterface {
  private readonly tableName = "master.catmaemenu";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["parent_id"],
      referencedTableName: "master.catmaemenu",
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
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "url",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "icon",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "orden",
            type: "int4",
            isNullable: false,
          },
          {
            name: "nivel",
            type: "int4",
            isNullable: false,
          },
          {
            name: "actions",
            type: "boolean",
            default: false,
            isNullable: false,
          },
          {
            name: "parent_id",
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
