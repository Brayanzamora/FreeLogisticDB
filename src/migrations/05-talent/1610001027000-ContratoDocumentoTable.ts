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

export class ContratoDocumentoTable1610001027000 implements MigrationInterface {
  private readonly tableName = "talent.catdetcontratodocumento";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["contrato_id"],
      referencedTableName: "talent.catmaecontrato",
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
            name: "url",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fechacreacion",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
          {
            name: "tipo",
            type: "enum",
            enum: [TipoContratoDocumento.FILE, TipoContratoDocumento.IMAGE],
            isNullable: false,
          },
          {
            name: "contrato_id",
            type: "int4",
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
