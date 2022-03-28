import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ClienteTable1610000000600 implements MigrationInterface {
  private readonly tableName = "personas.catmaecliente";
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
            name: "codigo_postal",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "latitud",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "longitud",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "contacto_principal",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "telefono_contacto",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "nombre_comercial",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "email_contacto",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "geo_contacto",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "patrocinador",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "area_id",
            type: "int4",
            isNullable: true,
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
