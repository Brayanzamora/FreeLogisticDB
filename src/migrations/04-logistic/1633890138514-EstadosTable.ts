import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class EstadosTable1633890138514 implements MigrationInterface {
  private readonly tableName = "facturacion.catmaeestados";

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
            name: "color",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "tipo",
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
