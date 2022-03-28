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

export class AddColumnsTareaTableTable1610004000170
  implements MigrationInterface
{
  private readonly tableName = "activities.catmaetarea";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: "horas_hombre",
        type: "decimal",
        precision: 9,
        scale: 3,
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
