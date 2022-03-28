import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class InventarioTable1610000007500 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaeinventario";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["proveedor_id"],
      referencedTableName: "personas.catmaeproveedor",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["recepcion_id"],
      referencedTableName: "facturacion.movmaerecepcion",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["estado_pedido_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["estado_documento_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["calificacion_proveedor_id"],
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
            name: "codigo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "quiebre_stock",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "comentario",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fecha_entrega",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "proveedor_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "recepcion_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "estado_pedido_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "estado_documento_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "calificacion_proveedor_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "flag",
            type: "boolean",
            default: true,
            isNullable: true,
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
