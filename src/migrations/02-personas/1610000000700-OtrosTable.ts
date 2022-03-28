import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class OtrosTable1610000000700 implements MigrationInterface {
  private readonly tableName = "personas.catmaeotros";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["area_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipomoneda_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["persona_id"],
      referencedTableName: "personas.catmaepersona",
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
            name: "codigo_postal",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "latitud",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "longitud",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "contacto_principal",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "telefono_contacto",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "patrocinador",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "area_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tipomoneda_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "persona_id",
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
