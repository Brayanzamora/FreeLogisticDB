import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum NombreEtapa {
  COTIZACIONVENTA = "COTIZACIONVENTA",
  ORDENVENTA = "ORDENVENTA",
}

export class CotizacionEtapaTable1610002000150 implements MigrationInterface {
  private readonly tableName = "project.catmaecotizacionetapa";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["cotizacion_id"],
      referencedTableName: "project.catmaecotizacion",
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
            name: "nombre_etapa",
            type: "enum",
            enum: [NombreEtapa.COTIZACIONVENTA, NombreEtapa.ORDENVENTA],
            isNullable: true,
          },
          {
            name: "cotizacion_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "codigo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "estado",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fecha_documento",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fecha_entrega",
            type: "timestamp",
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
