import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class RecursotrabajadorTable1610002000220 implements MigrationInterface {
  private readonly tableName = "project.catmaerecursotrabajador";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["recurso_id"],
      referencedTableName: "project.catmaerecurso",
      referencedColumnNames: ["id"],
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    }),
    new TableForeignKey({
      columnNames: ["trabajador_id"],
      referencedTableName: "personas.catmaetrabajador",
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
            name: "recurso_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "trabajador_id",
            type: "int4",
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
