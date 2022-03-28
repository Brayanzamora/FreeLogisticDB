import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ModuloExtraTable1610003000130 implements MigrationInterface {
  private readonly tableName = "master.segdetmoduloextra";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["modulo_precio_id"],
      referencedTableName: "master.segdetmoduloprecio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["suscripcion_id"],
      referencedTableName: "master.catmaesuscripcion",
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
            name: "modulo_precio_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "suscripcion_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
          {
            name: "update_at",
            type: "timestamp",
            default: "now()",
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
