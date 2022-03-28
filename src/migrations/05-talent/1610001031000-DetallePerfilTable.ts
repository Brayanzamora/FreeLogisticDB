import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DetallePerfilTable1610001031000 implements MigrationInterface {
  private readonly tableName = "talent.catdetperfil";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["perfil_id"],
      referencedTableName: "commons.catdetcompendio",
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
            name: "show",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "create",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "update",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "delete",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "menu",
            type: "int4",
            isNullable: false,
          },
          {
            name: "perfil_id",
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
