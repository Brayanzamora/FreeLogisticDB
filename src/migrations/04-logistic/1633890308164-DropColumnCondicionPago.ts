import {
    MigrationInterface,
    QueryRunner,
  } from "typeorm";

  export class DropColumnCondicionPago1633890308164
    implements MigrationInterface
  {
    private readonly tableName = "facturacion.catmaecondicionpago";

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.dropColumn(this.tableName, "porcentaje");

      await queryRunner.query(
        `ALTER TABLE ${this.tableName} alter column "dias" DROP NOT NULL;`
      );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

  }