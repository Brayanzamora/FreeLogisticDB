import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
} from "typeorm";

export class AddColumnsActividad1610002000250 implements MigrationInterface {
    private readonly tableName = "project.catmaeactividad";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "cantidad",
          type: "decimal",
          precision: 9,
          scale: 3,
          default: 1,
          isNullable: false,
        }),
        new TableColumn({
          name: "unidad_medida",
          type: "varchar",
          isNullable: true,
        }),
      ]);
      await queryRunner.query(
        `ALTER TABLE ${this.tableName} ALTER COLUMN "duracion" DROP NOT NULL;
        ALTER TABLE ${this.tableName} ALTER COLUMN "costo" TYPE NUMERIC(15,3);
        ALTER TABLE ${this.tableName} ALTER COLUMN "parent_id" DROP NOT NULL;
        ALTER TABLE ${this.tableName} ALTER COLUMN "predecesor_id" DROP NOT NULL;`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn(this.tableName, "cantidad");
      await queryRunner.dropColumn(this.tableName, "unidad_medida");
    }
}