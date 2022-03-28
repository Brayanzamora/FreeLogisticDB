import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ConfiguracionTable1610000000040 implements MigrationInterface {
  private readonly tableName = "commons.catmaeconfiguracion";

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
            name: "ruc",
            type: "varchar",
            length: "11",
            isNullable: true,
          },
          {
            name: "nombre",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "razon_social",
            type: "varchar",
            length: "200",
            isNullable: false,
          },
          {
            name: "direccion",
            type: "varchar",
            length: "200",
            isNullable: false,
          },
          {
            name: "logo",
            type: "varchar",
            length: "200",
            isNullable: true,
          },
          {
            name: "local_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "extranjero_id",
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

    await queryRunner.createForeignKeys(this.tableName, [
      new TableForeignKey({
        columnNames: ["local_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      }),
      new TableForeignKey({
        columnNames: ["extranjero_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
