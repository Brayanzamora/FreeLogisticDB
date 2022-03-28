import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ActividadValoresTable1610002000140 implements MigrationInterface {
  private readonly tableName = "project.catmaeactividadvalores";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["proyectotipocampo_id"],
      referencedTableName: "project.catmaeproyectotipocampo",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["actividad_id"],
      referencedTableName: "project.catmaeactividad",
      referencedColumnNames: ["id"],
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
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
            name: "valor",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "proyectotipocampo_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "actividad_id",
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
