import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemoveYearColumnTableDetallePresupuestoTesoreria1631920536169
  implements MigrationInterface
{
  private readonly tableName = "contabilidad.catdetpresupuestotesoreria";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      this.tableName,
      new TableColumn({
        name: "year",
        type: "int4",
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: "year",
        type: "int4",
        isNullable: false,
      })
    );
  }
}
