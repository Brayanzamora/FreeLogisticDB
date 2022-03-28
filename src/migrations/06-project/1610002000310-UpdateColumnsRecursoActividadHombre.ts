import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
} from "typeorm";

export class UpdateColumnsRecursoActividadHombre1610002000310 implements MigrationInterface {
    private readonly tableName = "project.catmaerecursoactividadhombre";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE ${this.tableName} ALTER COLUMN "cantidad" TYPE NUMERIC(9,3);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}