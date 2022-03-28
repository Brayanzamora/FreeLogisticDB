import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ArchivoTable1610005001900 implements MigrationInterface {
  private readonly tableName = "crm.catmaearchivo";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["actividad_id"],
      referencedTableName: "crm.catmaeactividad",
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
            isNullable: true,
          },
          {
            name: "file_url",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "fecha",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "actividad_id",
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
