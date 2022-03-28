import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class RecepcionTable1610000006600 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaerecepcion";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["estado_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["orden_id"],
      referencedTableName: "facturacion.movmaecompraorden",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["bodega_id"],
      referencedTableName: "facturacion.catmaebodega",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["proveedor_id"],
      referencedTableName: "personas.catmaeproveedor",
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
            name: "nrodoc",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "recepcion",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "motivo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "comentario",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "orden_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "bodega_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "proveedor_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "estado_id",
            type: "int4",
            isNullable: true,
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

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_CODIGO_RECEPCION",
        columnNames: ["codigo"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
