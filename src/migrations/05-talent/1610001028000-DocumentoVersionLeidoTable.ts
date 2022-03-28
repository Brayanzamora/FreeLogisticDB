import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum TipoContratoDocumento {
  IMAGE = "IMAGE",
  FILE = "FILE",
}

export class DocumentoVersionLeidoTable1610001028000
  implements MigrationInterface
{
  private readonly tableName = "talent.catmaedocumentoversionleido";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["documentoversion_id"],
      referencedTableName: "talent.catmaedocumentoversion",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["trabajador_id"],
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
            name: "documentoversion_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "trabajador_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "fecha_creacion",
            type: "timestamp",
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
