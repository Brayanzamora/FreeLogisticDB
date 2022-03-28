import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export enum PrioridadObjetivo {
  BAJA = "BAJA",
  MEDIA = "MEDIA",
  ALTA = "ALTA",
}

export enum StatusGestionObjetivo {
  ABIERTO = "ABIERTO",
  PROCESO = "PROCESO",
  COMPLETADO = "COMPLETADO",
}

export class AddColumnsObjetivoTableTable1610004000160
  implements MigrationInterface
{
  private readonly tableName = "activities.catmaeobjetivo";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: "fecha_entrega",
        type: "timestamp",
        isNullable: true,
      }),
      new TableColumn({
        name: "avance",
        type: "decimal",
        precision: 9,
        scale: 3,
        isNullable: true,
      }),
      new TableColumn({
        name: "horas_hombre",
        type: "decimal",
        precision: 9,
        scale: 3,
        isNullable: true,
      }),
      new TableColumn({
        name: "prioridad",
        type: "enum",
        enum: [
          PrioridadObjetivo.BAJA,
          PrioridadObjetivo.MEDIA,
          PrioridadObjetivo.ALTA,
        ],

        isNullable: true,
      }),
      new TableColumn({
        name: "status",
        type: "enum",
        enum: [
          StatusGestionObjetivo.ABIERTO,
          StatusGestionObjetivo.PROCESO,
          StatusGestionObjetivo.COMPLETADO,
        ],

        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
