import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum TipoDetalleAcuerdo {
  IMAGE = "IMAGE",
  FILE = "FILE",
}

export class DetalleAcuerdoTable1610004000050 implements MigrationInterface {
  private readonly tableName = "activities.catdetacuerdo";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["acuerdo_id"],
      referencedTableName: "activities.catmaeacuerdo",
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
            enum: [TipoDetalleAcuerdo.FILE, TipoDetalleAcuerdo.IMAGE],
            isNullable: false,
          },
          {
            name: "acuerdo_id",
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
