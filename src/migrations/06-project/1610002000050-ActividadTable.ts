import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum TipoDuracionActividad {
  HORA = "HORA",
  DIA = "DIA",
}

export enum NivelActividad {
  FASE = "FASE",
  ACTIVIDAD = "ACTIVIDAD",
  TAREA = "TAREA",
}

export enum PlanificacionActividad {
  PLANIFICADO = "PLANIFICADO",
  NOPLANIFICADO = "NOPLANIFICADO",
  ACTUALIZARPLANIFICADO = "ACTUALIZARPLANIFICADO",
}

export class ActividadTable1610002000050 implements MigrationInterface {
  private readonly tableName = "project.catmaeactividad";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["estado_id"],
      referencedTableName: "project.catmaeactividadestadotarea",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["responsable_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["parent_id"],
      referencedTableName: "project.catmaeactividad",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["predecesor_id"],
      referencedTableName: "project.catmaeactividad",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["proyecto_id"],
      referencedTableName: "project.catmaeproyecto",
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
            name: "duracion",
            type: "int4",
            isNullable: false,
          },
          {
            name: "costo",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "porcentajeavance",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "estado_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "responsable_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "parent_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "predecesor_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "proyecto_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "manual",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "nivelactividad",
            type: "enum",
            enum: [
              NivelActividad.ACTIVIDAD,
              NivelActividad.FASE,
              NivelActividad.TAREA,
            ],
            isNullable: false,
          },
          {
            name: "planificacion_actividad",
            type: "enum",
            enum: [
              PlanificacionActividad.PLANIFICADO,
              PlanificacionActividad.NOPLANIFICADO,
              PlanificacionActividad.ACTUALIZARPLANIFICADO,
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
