import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class MetaTable1610005000200 implements MigrationInterface {
  private readonly tableName = "crm.catmaemetas";

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
            name: "alcance_real",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "alcance_meta",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "lead_real",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "lead_meta",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "visitasweb_real",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "visitasweb_meta",
            type: "varchar",
            isNullable: true,
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

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_CAMPANHA_META",
        columnNames: ["campanha_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
