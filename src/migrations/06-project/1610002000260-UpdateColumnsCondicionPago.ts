import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
} from "typeorm";

export class UpdateColumnsCondicionPago1610002000260 implements MigrationInterface {
    private readonly tableName = "project.catmaecondicionpago";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "fecha_plazo",
          type: "timestamp",
          isNullable: true,
        }),
      ]);
      //await queryRunner.query(`ALTER TABLE ${this.tableName} DROP COLUMN "dias";`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn(this.tableName, "fecha_plazo");
    }
}