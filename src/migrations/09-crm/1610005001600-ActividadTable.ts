import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum TipoTarea {
  LLAMADA = "LLAMADA",
  REUNION = "REUNION",
  VUELO = "VUELO",
  COMIDA = "COMIDA",
  CENA = "CENA",
  OTROS = "OTROS",
}

export class ActividadTable1610005001600 implements MigrationInterface {
  private readonly tableName = "crm.catmaeactividad";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["contacto_id"],
      referencedTableName: "crm.catmaecontacto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["oportunidad_id"],
      referencedTableName: "crm.catmaeoportunidad",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["asignado_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["colaborador_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["estado_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["prioridad_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["parent_id"],
      referencedTableName: "crm.catmaeactividad",
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
            isNullable: true,
          },
          {
            name: "fecha",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fecha_fin",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "tipo_tarea",
            type: "enum",
            enum: [
              TipoTarea.LLAMADA,
              TipoTarea.REUNION,
              TipoTarea.VUELO,
              TipoTarea.COMIDA,
              TipoTarea.CENA,
              TipoTarea.OTROS,
            ],
            isNullable: true,
          },
          {
            name: "hora_inicio",
            type: "time",
            isNullable: false,
          },
          {
            name: "duracion",
            type: "time",
            isNullable: false,
          },
          {
            name: "descripcion",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "color",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipocontacto_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "contacto_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "asignado_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "colaborador_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "oportunidad_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "estado_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "prioridad_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "parent_id",
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
