import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ProyectoTipoCampoTable1610002000020 implements MigrationInterface {
  private readonly tableName = "project.catmaeproyectotipocampo";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["proyecto_id"],
      referencedTableName: "project.catmaeproyecto",
      referencedColumnNames: ["id"],
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }),
    new TableForeignKey({
      columnNames: ["tipocampo_id"],
      referencedTableName: "commons.catdetcompendio",
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
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "proyecto_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tipocampo_id",
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

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
