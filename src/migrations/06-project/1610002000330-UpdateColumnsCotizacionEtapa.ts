import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
} from "typeorm";

export class UpdateColumnsCotizacionEtapa1610002000330 implements MigrationInterface {
    private readonly tableName = "project.catmaecotizacionetapa";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE ${this.tableName} DROP COLUMN "estado";`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}