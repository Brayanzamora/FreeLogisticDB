import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum PrioridadTarea {
  BAJA = "BAJA",
  MEDIA = "MEDIA",
  ALTA = "ALTA",
}

export enum EstatusGestionTarea {
  ABIERTO = "ABIERTO",
  PROCESO = "PROCESO",
  COMPLETADO = "COMPLETADO",
}

export class TareaTable1610004000110 implements MigrationInterface {
  private readonly tableName = "activities.catmaetarea";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["objetivo_id"],
      referencedTableName: "activities.catmaegrupo",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["responsable_id"],
      referencedTableName: "activities.catmaeparticipante",
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
            name: "fecha_entrega",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "avance",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "prioridad",
            type: "enum",
            enum: [
              PrioridadTarea.BAJA,
              PrioridadTarea.MEDIA,
              PrioridadTarea.ALTA,
            ],
            isNullable: true,
          },
          {
            name: "estatus",
            type: "enum",
            enum: [
              EstatusGestionTarea.ABIERTO,
              EstatusGestionTarea.PROCESO,
              EstatusGestionTarea.COMPLETADO,
            ],
            isNullable: true,
          },
          {
            name: "objetivo_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "responsable_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
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
