import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class DetalleClasificarCuentaTable1610000003500
  implements MigrationInterface
{
  private readonly tableName = "contabilidad.catdetclasificarcuenta";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["clasificarcuenta_id"],
      referencedTableName: "contabilidad.catmaeclasificarcuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["centrocosto_id"],
      referencedTableName: "contabilidad.catmaecentrocosto",
      referencedColumnNames: ["id"],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "id",
            type: "int4",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "porcentaje",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "centrocosto_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "clasificarcuenta_id",
            type: "int4",
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
