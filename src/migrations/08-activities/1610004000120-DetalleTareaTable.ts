import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum TipoDetalleTarea {
  IMAGE = "IMAGE",
  FILE = "FILE",
}

export class DetalleTareaTable1610004000120 implements MigrationInterface {
  private readonly tableName = "activities.catdettarea";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["tarea_id"],
      referencedTableName: "activities.catmaetarea",
      referencedColumnNames: ["id"],
      onUpdate: "CASCADE",
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
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "url",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipo",
            type: "enum",
            enum: [TipoDetalleTarea.FILE, TipoDetalleTarea.IMAGE],
            isNullable: false,
          },
          {
            name: "tarea_id",
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
