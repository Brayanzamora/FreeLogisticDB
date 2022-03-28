import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ProductoTable1610003000040 implements MigrationInterface {
  private readonly tableName = "master.catmaeproducto";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["moneda_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["undmedida_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["pais_id"],
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
            name: "precio",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "moneda_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "undmedida_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "pais_id",
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
