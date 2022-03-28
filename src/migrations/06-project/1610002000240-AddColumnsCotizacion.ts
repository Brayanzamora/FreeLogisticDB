import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
} from "typeorm";

export class AddColumnsCotizacion1610002000240 implements MigrationInterface {
    private readonly tableName = "project.catmaecotizacion";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "glosa_general",
          type: "varchar",
          isNullable: true,
        }),
      ]);
      await queryRunner.query(
        `ALTER TABLE ${this.tableName} ALTER COLUMN "costo_total_recursos" TYPE NUMERIC(15,3);
        ALTER TABLE ${this.tableName} ALTER COLUMN "imprevisto" TYPE NUMERIC(15,3);
        ALTER TABLE ${this.tableName} ALTER COLUMN "descuento" TYPE NUMERIC(15,3);
        ALTER TABLE ${this.tableName} ALTER COLUMN "margen" TYPE NUMERIC(15,3);
        ALTER TABLE ${this.tableName} ALTER COLUMN "impuesto" TYPE NUMERIC(15,3);
        ALTER TABLE ${this.tableName} ALTER COLUMN "utilidad" TYPE NUMERIC(15,3);
        ALTER TABLE ${this.tableName} ALTER COLUMN "total" TYPE NUMERIC(15,3);`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn(this.tableName, "glosa_general");
    }
}