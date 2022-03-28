import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ActividadAvanceControlTable1610002000120
  implements MigrationInterface
{
  private readonly tableName = "project.catmaeactividadavancecontrol";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["avancecontrol_id"],
      referencedTableName: "project.catmaeavancecontrol",
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
            name: "pvplanned",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "pvreal",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "orden",
            type: "int4",
            isNullable: false,
          },
          {
            name: "avancecontrol_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "init_date",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "end_date",
            type: "timestamp",
            isNullable: true,
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
