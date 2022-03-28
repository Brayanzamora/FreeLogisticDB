import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  TableColumn,
} from "typeorm";

export class AlterPresupuestoEconomicoCentroCosto1631901894052
  implements MigrationInterface
{
  private readonly tableName = "contabilidad.catmaepresupuestoeconomico";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ["centrocosto_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: "undnegocio_id",
        type: "int4",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ["undnegocio_id"],
        referencedTableName: "contabilidad.catmaecentrocosto",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ["undnegocio_id"],
        referencedTableName: "contabilidad.catmaecentrocosto",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.dropColumn(
      this.tableName,
      new TableColumn({
        name: "undnegocio_id",
        type: "int4",
        isNullable: false,
      })
    );

    await queryRunner.dropForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ["centrocosto_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      })
    );
  }
}
