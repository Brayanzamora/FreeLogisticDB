import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ArticuloTable1610000005500 implements MigrationInterface {
  private readonly tableName = "facturacion.catmaeproducto";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["undmedida_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["moneda_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["undnegocio_id"],
      referencedTableName: "contabilidad.catmaecentrocosto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["categoria_id"],
      referencedTableName: "facturacion.catmaecategoria",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["subcategoria_id"],
      referencedTableName: "facturacion.catmaesubcategoria",
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
            name: "codigo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "undmedida_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "moneda_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "precio",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "tipo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "undnegocio_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "categoria_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "subcategoria_id",
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
