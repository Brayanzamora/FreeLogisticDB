import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from "typeorm";

  export class AddFKEstadosVentaCotizacion1634063073585
    implements MigrationInterface
  {
    private readonly tableName = "facturacion.movmaeventacotizacion";

    private readonly foreignKeys = [
      new TableForeignKey({
        columnNames: ["estado_id"],
        referencedTableName: "facturacion.catmaeestados",
        referencedColumnNames: ["id"],
      }),
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "estado_id",
          type: "int4",
          isNullable: true,
        }),
      ]);

     await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn(this.tableName, "estado_id");
    }

  }
