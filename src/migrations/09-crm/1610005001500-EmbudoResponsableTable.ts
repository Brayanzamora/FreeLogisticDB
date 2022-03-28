import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class EmbudoResponsableTable1610005001500 implements MigrationInterface {
  private readonly tableName = "crm.catmaeembudoresponsable";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["funnel_id"],
      referencedTableName: "crm.catmaefunnel",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["embudo_id"],
      referencedTableName: "crm.catmaeembudo",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["responsable_id"],
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
            name: "embudo_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "funnel_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "responsable_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "active",
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
