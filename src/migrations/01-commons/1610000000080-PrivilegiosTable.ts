import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class PrivilegioTable1610000000070 implements MigrationInterface {
  private readonly tableName = "commons.catmaeprivilegio";

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
            name: "accion_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "menu_id", // ref master.catmaemenu
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

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ["accion_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf("accion_id") !== -1
    );
    await queryRunner.dropForeignKey(this.tableName, foreignKey);
    await queryRunner.dropTable(this.tableName);
  }
}
