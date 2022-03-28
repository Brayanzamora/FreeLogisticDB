import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class GastosGeneralesTable1610002000100 implements MigrationInterface {
  private readonly tableName = "project.catmaegastosgenerales";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["proyecto_id"],
      referencedTableName: "project.catmaeproyecto",
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
            name: "concepto",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "descripcion",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "precio",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "unidad",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cantidad",
            type: "int4",
            isNullable: true,
          },
          {
            name: "proyecto_id",
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
