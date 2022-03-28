import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
  } from "typeorm";

  export class AddColumnCompraCotizacion1633890293541
    implements MigrationInterface
  {
    private readonly tableName = "facturacion.movmaecompracotizacion";

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "lugarentrega",
          type: "varchar",
          isNullable: true,
        }),
        new TableColumn({
          name: "fechavencimiento",
          type: "timestamp",
          isNullable: false,
        }),
      ]);

      await queryRunner.dropColumn(this.tableName, "fechacontabilizacion");
      await queryRunner.dropColumn(this.tableName, "validohasta");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn(this.tableName, "lugarentrega");
      await queryRunner.dropColumn(this.tableName, "fechavencimiento");
    }

  }