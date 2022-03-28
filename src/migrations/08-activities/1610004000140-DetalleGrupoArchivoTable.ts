import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum TipoDetalleGrupoArchivo {
  IMAGE = "IMAGE",
  FILE = "FILE",
}

export class DetalleGrupoArchivoTable1610004000140
  implements MigrationInterface
{
  private readonly tableName = "activities.catdetgrupoarchivo";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["grupo_id"],
      referencedTableName: "activities.catmaegrupo",
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
            enum: [TipoDetalleGrupoArchivo.FILE, TipoDetalleGrupoArchivo.IMAGE],
            isNullable: false,
          },
          {
            name: "grupo_id",
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
