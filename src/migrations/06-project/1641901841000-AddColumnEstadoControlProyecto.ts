import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
} from "typeorm";

export enum EstadoControl {
  GESTION = "GESTION",
  PLANIFICACION = "PLANIFICACION",
  CONTROL = "CONTROL",
}

export class AddColumnEstadoControlProyecto1641901841000 implements MigrationInterface {
    private readonly tableName = "project.catmaeproyecto";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "estado_control",
          type: "enum",
          enum: [
            EstadoControl.GESTION,
            EstadoControl.PLANIFICACION,
            EstadoControl.CONTROL,
          ],
          isNullable: true,
        }),
      ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn(this.tableName, "estado_control");
    }
}