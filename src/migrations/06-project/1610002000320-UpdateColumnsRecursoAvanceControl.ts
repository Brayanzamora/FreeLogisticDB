import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
} from "typeorm";

export class UpdateColumnsRecursoAvanceControl1610002000320 implements MigrationInterface {
    private readonly tableName = "project.catmaerecursoavancecontrol";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `ALTER TABLE ${this.tableName} ALTER COLUMN "recurso_actividad_insumo_maquinaria_id" DROP NOT NULL;
        ALTER TABLE ${this.tableName} ALTER COLUMN "recurso_actividad_hombre_id" DROP NOT NULL;
        ALTER TABLE ${this.tableName} ALTER COLUMN "avancecontrol_id" DROP NOT NULL;`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}