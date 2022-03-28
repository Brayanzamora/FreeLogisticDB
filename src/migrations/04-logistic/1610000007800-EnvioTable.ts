import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class EnvioTable1610000007800 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaeenvio";

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
            name: "destinatario",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "direccion",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "ciudad",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "telefono",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "ruc",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "empresa",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "zipcode",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "comuna",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "notas",
            type: "varchar",
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
