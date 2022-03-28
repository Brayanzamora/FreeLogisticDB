import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class SubCondicionPagoTable1610002000230 implements MigrationInterface {
  private readonly tableName = "project.catmaesubcondicionpago";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["condicionpago_id"],
      referencedTableName: "project.catmaecondicionpago",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["plazopago_id"],
      referencedTableName: "commons.catdetcompendio",
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
            name: "cuota_porcentaje",
            type: "int4",
            isNullable: true,
          },
          {
            name: "condicionpago_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "plazopago_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "fecha_desembolso",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "motivo",
            type: "varchar",
            isNullable: false,
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
