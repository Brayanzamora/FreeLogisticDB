import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddFKFacturaProyecto1610002000280
  implements MigrationInterface
{
  private readonly tableName = "project.catmaefacturaproyecto";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["documentos_id"],
      referencedTableName: "contabilidad.catmaedocumentos",
      referencedColumnNames: ["id"],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: "documentos_id",
        type: "int4",
        isNullable: true,
      }),
    ]);

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} ALTER COLUMN "motivo" DROP NOT NULL;
      ALTER TABLE ${this.tableName} ALTER COLUMN "cumplimiento" DROP NOT NULL;`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropColumn(this.tableName, "documentos_id");
  }
}
