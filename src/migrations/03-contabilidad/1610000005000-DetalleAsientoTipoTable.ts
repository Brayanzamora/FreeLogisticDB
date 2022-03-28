import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DetalleAsientoTipoTable1610000005000
  implements MigrationInterface
{
  private readonly tableName = "contabilidad.catdetasientotipo";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["tipopersona_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipodocumento_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipomoneda_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["entidadfinanciera_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["cliente_id"],
      referencedTableName: "personas.catmaetipopersona",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["centrocosto_id"],
      referencedTableName: "contabilidad.catmaecentrocosto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["asientotipo_id"],
      referencedTableName: "contabilidad.catmaeasientotipo",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plancuenta_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
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
            name: "tipo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipopersona_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "cliente_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tipodocumento_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "glosa",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipomoneda_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plancuenta_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "libro",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "debe",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "haber",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "entidadfinanciera_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "mediopago_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "centrocosto_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "asientotipo_id",
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
