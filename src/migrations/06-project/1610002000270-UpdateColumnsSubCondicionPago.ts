import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
} from "typeorm";

export class UpdateColumnsSubCondicionPago1610002000270 implements MigrationInterface {
    private readonly tableName = "project.catmaesubcondicionpago";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "fecha_plazo",
          type: "timestamp",
          isNullable: true,
        }),
      ]);
      await queryRunner.query(
        `ALTER TABLE ${this.tableName} ALTER COLUMN "fecha_desembolso" DROP NOT NULL;
        ALTER TABLE ${this.tableName} ALTER COLUMN "motivo" DROP NOT NULL;`
      );
      await queryRunner.query(`ALTER TABLE ${this.tableName} DROP COLUMN "plazopago_id";`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn(this.tableName, "fecha_plazo");
    }
}