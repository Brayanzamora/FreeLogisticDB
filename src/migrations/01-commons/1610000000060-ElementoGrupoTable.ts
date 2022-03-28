import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class ElementoGrupoTable1610000000060 implements MigrationInterface {
  private readonly tableName = "commons.catdetelementogrupo";

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
            name: "elemento_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "grupo_id",
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
    await queryRunner.createForeignKeys(this.tableName, [
      new TableForeignKey({
        columnNames: ["elemento_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      }),
      new TableForeignKey({
        columnNames: ["grupo_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      }),
    ]);

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_ELEMENTOGRUPO",
        columnNames: ["elemento_id", "grupo_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const elemento = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf("elemento_id") !== -1
    );
    const grupo = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf("grupo_id") !== -1
    );
    await queryRunner.dropForeignKeys(this.tableName, [elemento, grupo]);
    await queryRunner.dropTable(this.tableName);
  }
}
