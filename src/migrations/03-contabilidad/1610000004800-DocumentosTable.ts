import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

enum TiposDocumento {
  projects = "projects",
  contabilidad = "contabilidad",
  logistica = "logistica",
}

enum EstadoDocumento {
  pendiente = "pendiente",
  emitido = "emitido",
  anulado = "anulado",
}

export class DocumentosTable1610000004800 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaedocumentos";

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
      columnNames: ["cliente_id"],
      referencedTableName: "personas.catmaetipopersona",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["centrocosto_id"],
      referencedTableName: "contabilidad.catmaecentrocosto",
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
            name: "tipopersona_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "cliente_id", // tipo personas (proveedor cliente trabajador etc)
            type: "int4",
            isNullable: false,
          },
          {
            name: "tipo",
            type: "enum",
            enum: [
              TiposDocumento.contabilidad,
              TiposDocumento.projects,
              TiposDocumento.logistica,
            ],
            isNullable: false,
          },
          {
            name: "documento",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipodocumento_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "numero",
            type: "varchar",
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
            name: "monto",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "estado",
            type: "enum",
            enum: [
              EstadoDocumento.pendiente,
              EstadoDocumento.emitido,
              EstadoDocumento.anulado,
            ],
            isNullable: false,
          },
          {
            name: "fechdoc",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fechvcto",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "centrocosto_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "asignado",
            type: "boolean",
            default: false,
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
