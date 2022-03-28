import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class DetalleDatoTable1610005000900 implements MigrationInterface {
  private readonly tableName = "crm.catdetdato";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["contacto_id"],
      referencedTableName: "crm.catmaecontacto",
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
            name: "persona_contacto",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "telefono",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "georeferencia",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "contacto_id",
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
