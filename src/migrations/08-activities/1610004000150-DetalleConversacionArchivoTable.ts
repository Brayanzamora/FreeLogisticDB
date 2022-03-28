import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum TipoConversacionArchivo {
  IMAGE = "IMAGE",
  FILE = "FILE",
}

export class DetalleConversacionArchivoTable1610004000150
  implements MigrationInterface
{
  private readonly tableName = "activities.catdetconversacionarchivo";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["conversacion_id"],
      referencedTableName: "activities.catmaeconversacion",
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
            name: "nombre",
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
            enum: [TipoConversacionArchivo.FILE, TipoConversacionArchivo.IMAGE],
            isNullable: false,
          },
          {
            name: "conversacion_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "fechacreacion",
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
