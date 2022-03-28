import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddFKEficiencia1610002000290
  implements MigrationInterface
{
  private readonly tableName = "project.catmaeficiencia";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["recursoavancecontrol_id"],
      referencedTableName: "project.catmaerecursoavancecontrol",
      referencedColumnNames: ["id"],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: "comentarios_respuesta",
        type: "varchar",
        isNullable: true,
      }),
      new TableColumn({
        name: "recursoavancecontrol_id",
        type: "int4",
        isNullable: true,
      }),

    ]);

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, "comentarios_respuesta");
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropColumn(this.tableName, "recursoavancecontrol_id");
  }
}
