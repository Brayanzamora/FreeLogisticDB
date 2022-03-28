import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class PersonaClaveTable1610005000800 implements MigrationInterface {
  private readonly tableName = "crm.catmaepersonaclave";

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
            name: "nombre",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "telefono",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "empresa",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "rol",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "contacto_id",
            type: "int4",
            isNullable: true,
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
