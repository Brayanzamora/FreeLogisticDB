import { MigrationInterface, QueryRunner, Table } from "typeorm";

export enum TipoActivacion {
  INICIO = "INICIO",
  FIN = "FIN",
  NINGUNO = "NINGUNO",
  PREDETERMINADO = "PREDETERMINADO",
}

export class ActividadEstadoTareaTable1610002000040
  implements MigrationInterface
{
  private readonly tableName = "project.catmaeactividadestadotarea";

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
            isNullable: false,
          },
          {
            name: "abbr",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipoactivacion",
            type: "enum",
            enum: [
              TipoActivacion.INICIO,
              TipoActivacion.FIN,
              TipoActivacion.NINGUNO,
              TipoActivacion.PREDETERMINADO,
            ],
            isNullable: false,
          },
          {
            name: "color",
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
