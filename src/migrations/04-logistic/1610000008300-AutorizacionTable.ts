import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class AutorizacionTable1610000008300 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaeautorizacion";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["estado_documento_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["estado_recepcion_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["califica_proveedor_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["recepcion_id"],
      referencedTableName: "facturacion.movmaerecepcion",
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
            name: "comentarios",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cumplmiento",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "recepcion_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "estado_documento_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "estado_recepcion_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "califica_proveedor_id",
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
