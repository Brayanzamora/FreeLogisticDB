import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class HistoriaRolTable1610001030000 implements MigrationInterface {
  private readonly tableName = "talent.catdethistorialrol";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["rol_id"],
      referencedTableName: "personas.catmaerol",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["trabajador_id"],
      referencedTableName: "personas.catmaetrabajador",
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
            name: "inicio",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
          {
            name: "fin",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "trabajador_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "rol_id",
            type: "int4",
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
