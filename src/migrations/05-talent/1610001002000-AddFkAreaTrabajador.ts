import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddFkAreaTrabajador1610001002000 implements MigrationInterface {
  private readonly tableName = "personas.catmaetrabajador";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["area_id"],
      referencedTableName: "talent.catmaearea",
      referencedColumnNames: ["id"],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: "area_id",
        type: "int4",
        isNullable: true,
      }),
    ]);

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropColumn(this.tableName, "area_id");
  }
}
