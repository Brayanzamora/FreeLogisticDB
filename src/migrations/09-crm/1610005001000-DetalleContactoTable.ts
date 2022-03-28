import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class DetalleContactoTable1610005001000 implements MigrationInterface {
  private readonly tableName = "crm.catdetcontacto";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["contacto_id"],
      referencedTableName: "crm.catmaecontacto",
      referencedColumnNames: ["id"],
    }),
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
            name: "direccion",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "razon_social",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "telefono",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "movil",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "website",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "pais_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "departamento_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "provincia_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "distrito_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "cod_postal",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "nombre_comercial",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "otros_datos",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "comentario",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "contacto_id",
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
        name: "UQ_CONTACTO_DETALLE",
        columnNames: ["contacto_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
