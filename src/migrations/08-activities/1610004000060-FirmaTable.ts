import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class FirmaTable1610004000060 implements MigrationInterface {
  private readonly tableName = "activities.catmaefirma";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["acuerdo_id"],
      referencedTableName: "activities.catmaeacuerdo",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["participante_id"],
      referencedTableName: "activities.catmaeparticipante",
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
            name: "acuerdo_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "participante_id",
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
