import { TableUnique } from "typeorm";
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class PersonaTable1610000000300 implements MigrationInterface {
  private readonly tableName = "personas.catmaepersona";
  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["pais_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["departamento_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["provincia_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["distrito_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipodoc_id"],
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
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "lastname",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "num_doc",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "razon_social",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "direccion",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "pais_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "departamento_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "provincia_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "distrito_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "tipodoc_id",
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

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        columnNames: ["num_doc"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
