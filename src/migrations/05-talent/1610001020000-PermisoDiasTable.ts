import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class PermisoDiasTable1610001020000 implements MigrationInterface {
  private readonly tableName = "talent.catmaepermisodias";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["permiso_id"],
      referencedTableName: "talent.catmaepermiso",
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
            name: "fecha",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "minutos",
            type: "time",
            isNullable: false,
          },
          {
            name: "permiso_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "recuperado",
            type: "boolean",
            default: false,
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
