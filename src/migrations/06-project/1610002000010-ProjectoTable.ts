import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum PeriodicidadProyecto {
  SEMANAL = "SEMANAL",
  BISEMANAL = "BISEMANAL",
  MENSUAL = "MENSUAL",
}

export enum CotizacionProyecto {
  COTIZADO = "COTIZADO",
  NOCOTIZADO = "NOCOTIZADO",
  ACTUALIZARCOTIZADO = "ACTUALIZARCOTIZADO",
}

export class ProjectoTable1610002000010 implements MigrationInterface {
  private readonly tableName = "project.catmaeproyecto";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["cliente_id"],
      referencedTableName: "personas.catmaecliente",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["estadofactura_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipo_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["ejecutivodecuenta_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["responsable_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipomoneda_id"],
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
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "descripcion",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "horaplaneada",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "costo",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "presupuesto",
            type: "int4",
            isNullable: false,
          },
          {
            name: "horaslaborable",
            type: "int4",
            isNullable: true,
          },
          {
            name: "inicio",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fin",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "cliente_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tipo_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "ejecutivodecuenta_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "responsable_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "estadofactura_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tipomoneda_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "periodicidad",
            type: "enum",
            enum: [
              PeriodicidadProyecto.SEMANAL,
              PeriodicidadProyecto.BISEMANAL,
              PeriodicidadProyecto.MENSUAL,
            ],
            isNullable: false,
          },
          {
            name: "undnegocio_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "categoria_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "subcategoria_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "estado_cotizacion",
            type: "enum",
            enum: [
              CotizacionProyecto.NOCOTIZADO,
              CotizacionProyecto.COTIZADO,
              CotizacionProyecto.ACTUALIZARCOTIZADO,
            ],
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
