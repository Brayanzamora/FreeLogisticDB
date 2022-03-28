import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
} from "typeorm";

export class AddColumnsActividadAvanceControl1610002000340 implements MigrationInterface {
    private readonly tableName = "project.catmaeactividadavancecontrol";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "orden_general",
          type: "int4",
          isNullable: false,
        }),
      ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn(this.tableName, "orden_general");
    }
}