import {
    MigrationInterface,
    QueryRunner,
} from "typeorm";

export class AlterDataTypeColumnPresupuesto1645200687000 implements MigrationInterface {
    private readonly tableName = "project.catmaeproyecto";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `ALTER TABLE ${this.tableName} ALTER COLUMN "costo" TYPE NUMERIC(15,3);
        ALTER TABLE ${this.tableName} ALTER COLUMN "presupuesto" TYPE NUMERIC(15,3);      
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `ALTER TABLE ${this.tableName} ALTER COLUMN "costo" TYPE NUMERIC(15,3);
        ALTER TABLE ${this.tableName} ALTER COLUMN "presupuesto" TYPE NUMERIC(15,3);      
        `);
    }
}