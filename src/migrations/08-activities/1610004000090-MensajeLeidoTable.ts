import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class MensajeLeidoTable1610004000090 implements MigrationInterface {
  private readonly tableName = "activities.catdetmensajeleido";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["mensaje_id"],
      referencedTableName: "activities.catmaemensaje",
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
            name: "leido",
            type: "boolean",
            default: false,
            isNullable: false,
          },
          {
            name: "mensaje_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "participante_id",
            type: "int4",
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_CONVERSACION_MENSAJE_LEIDO",
        columnNames: ["participante_id", "mensaje_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
