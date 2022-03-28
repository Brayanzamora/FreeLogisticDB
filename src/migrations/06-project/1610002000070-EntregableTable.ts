import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class EntregableTable1610002000070 implements MigrationInterface {
  private readonly tableName = "project.catmaeentregable";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["ejecutivomanager_id"],
      referencedTableName: "project.catmaeproyecto",
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
            name: "ejecutivomanager_id",
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
