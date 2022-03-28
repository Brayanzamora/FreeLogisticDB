import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class AccionesTable1610003000020 implements MigrationInterface {
  private readonly tableName = "master.catmaeacciones";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["menu_id"],
      referencedTableName: "master.catmaemenu",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["accion_id"],
      referencedTableName: "commons.catdetcompendio",
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
            name: "menu_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "accion_id",
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
