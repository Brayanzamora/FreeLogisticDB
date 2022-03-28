import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class BodegaTable1610000005400 implements MigrationInterface {
  private readonly tableName = "facturacion.catmaebodega";

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
            name: "codigo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "direccion",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "telefono",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "distrito",
            type: "varchar",
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
