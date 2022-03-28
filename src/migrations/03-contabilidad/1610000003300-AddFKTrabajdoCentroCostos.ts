import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddFKTrabajdoCentroCostos1610000003300
  implements MigrationInterface
{
  private readonly tableName = "personas.catmaetrabajador";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: "undnegocio_id",
        type: "int4",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ["undnegocio_id"],
        referencedTableName: "contabilidad.catmaecentrocosto",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf("undnegocio_id") !== -1
    );
    await queryRunner.dropForeignKey(this.tableName, foreignKey);
    await queryRunner.dropColumn(this.tableName, "undnegocio_id");
  }
}
