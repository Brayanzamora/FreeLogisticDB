import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class MensajeTable1610004000080 implements MigrationInterface {
  private readonly tableName = "activities.catmaemensaje";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["conversacion_id"],
      referencedTableName: "activities.catmaeconversacion",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["participante_id"],
      referencedTableName: "activities.catmaeintegrante",
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
            name: "mensaje",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "archivo",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: true,
          },
          {
            name: "conversacion_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "participante_id",
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
