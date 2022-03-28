import { MigrationInterface, QueryRunner, Table } from "typeorm";

export enum TipoEficiencia {
  EXTERNOS = "EXTERNOS",
  INTERNOS = "INTERNOS",
  CALIDAD = "CALIDAD",
}

export enum RespuestaEficiencia {
  ACCIONES = "ACCIONES",
  DECISIONES = "DECISIONES",
  CAMBIOS = "CAMBIOS",
}

export class EficienciaTable1610002000060 implements MigrationInterface {
  private readonly tableName = "project.catmaeficiencia";

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
            name: "horas",
            type: "int4",
            isNullable: false,
          },
          {
            name: "comentarios_tipo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipo_eficiencia",
            type: "enum",
            enum: [
              TipoEficiencia.EXTERNOS,
              TipoEficiencia.INTERNOS,
              TipoEficiencia.CALIDAD,
            ],
            isNullable: false,
          },
          {
            name: "respuesta_eficiencia",
            type: "enum",
            enum: [
              RespuestaEficiencia.ACCIONES,
              RespuestaEficiencia.DECISIONES,
              RespuestaEficiencia.CAMBIOS,
            ],
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
