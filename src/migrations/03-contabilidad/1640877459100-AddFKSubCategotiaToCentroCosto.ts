import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddFKSubCategotiaToCentroCosto1640877459100
  implements MigrationInterface
{
  private readonly tableName = "contabilidad.catmaecentrocosto";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["subcategoria_id"],
      referencedTableName: "facturacion.catmaesubcategoria",
      referencedColumnNames: ["id"],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: "subcategoria_id",
        type: "int4",
        isNullable: true,
      }),
    ]);

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropColumn(this.tableName, "subcategoria_id");
  }
}
