import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class ProveedorTable1610000000800 implements MigrationInterface {
  private readonly tableName = "personas.catmaeproveedor";
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
    new TableForeignKey({
      columnNames: ["pais_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipo_proveedor_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["categoria_proveedor_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["giro_id"],
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
            name: "sitio_web",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "ciudad",
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
            name: "pais_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tipo_proveedor_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "categoria_proveedor_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "giro_id",
            type: "int4",
            isNullable: true,
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
        columnNames: ["persona_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
