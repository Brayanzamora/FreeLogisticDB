import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class TipoPersonaTable1610000001100 implements MigrationInterface {
  private readonly tableName = "personas.catmaetipopersona";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["persona_id"],
      referencedTableName: "personas.catmaepersona",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipopersona_id"],
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
            name: "persona_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "tipopersona_id",
            type: "int4",
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
