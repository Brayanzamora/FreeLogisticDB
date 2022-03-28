import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class FacturaDesembolsoTable1645435325100 implements MigrationInterface {
  private readonly tableName = "project.catmaefacturadesembolso";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["factura_proyecto_id"],
      referencedTableName: "project.catmaefacturaproyecto",
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
            name: "monto",
            type: "decimal",
            precision: 15,
            scale: 3,
            isNullable: true,
          },
          {
            name: "fecha_desembolso",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "factura_proyecto_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "flag",
            type: "boolean",
            default: true,
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
