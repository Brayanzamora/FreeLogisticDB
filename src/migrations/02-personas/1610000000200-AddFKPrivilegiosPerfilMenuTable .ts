import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class AddFKPrivilegiosPerfilMenuTable1610000000200
  implements MigrationInterface
{
  private readonly tableName = "commons.catmaeprivilegio";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ["menu_id"],
        referencedTableName: "personas.segdetperfilmenu",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf("menu_id") !== -1
    );
    await queryRunner.dropForeignKey(this.tableName, foreignKey);
  }
}
