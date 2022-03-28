import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
} from "typeorm";

export enum TipoControl {
  NORMAL = "NORMAL",
  ADICIONAL = "ADICIONAL",
}

export class AddTipoControlToActividadAvanceControlControl1634318115000 implements MigrationInterface {
    private readonly tableName = "project.catmaeactividadavancecontrol";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "tipo_control",
          type: "enum",
          enum: [TipoControl.NORMAL, TipoControl.ADICIONAL],
          isNullable: true,
        }),
      ]);
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "fecha_control",
          type: "timestamp",
          isNullable: true,
        }),
      ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn(this.tableName, "tipo_control");
      await queryRunner.dropColumn(this.tableName, "fecha_control");
    }
}