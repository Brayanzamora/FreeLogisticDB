import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class SalidaTable1610000006200 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaesalida";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["und_negocio_id"],
      referencedTableName: "contabilidad.catmaecentrocosto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["bodega_id"],
      referencedTableName: "facturacion.catmaebodega",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipomov_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["venta_orden_id"],
      referencedTableName: "facturacion.movmaeventaorden",
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
            name: "documento",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fecha",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "comentario",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "venta_orden_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "tipomov_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "und_negocio_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "bodega_id",
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
