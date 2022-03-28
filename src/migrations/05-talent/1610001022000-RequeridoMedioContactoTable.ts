import { MigrationInterface, QueryRunner, Table } from "typeorm";

export enum TipoPersonaMedio {
  CLIENTE = "CLIENTE",
  TRABAJADOR = "TRABAJADOR",
  PROVEEDOR = "PROVEEDOR",
}

export class RequeridoMedioContactoTable1610001022000
  implements MigrationInterface
{
  private readonly tableName = "talent.catmaerequeridomediocontacto";

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
            name: "tipo_persona",
            type: "enum",
            enum: [
              TipoPersonaMedio.CLIENTE,
              TipoPersonaMedio.TRABAJADOR,
              TipoPersonaMedio.PROVEEDOR,
            ],
            isNullable: false,
          },
          {
            name: "tipomediocontacto_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "requerido",
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
