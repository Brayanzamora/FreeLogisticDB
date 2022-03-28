import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class LeadTable1610005000300 implements MigrationInterface {
  private readonly tableName = "crm.catmaeleads";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["campanha_id"],
      referencedTableName: "crm.catmaecampanha",
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
            name: "correo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nombre_cliente",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "campanha_id",
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
