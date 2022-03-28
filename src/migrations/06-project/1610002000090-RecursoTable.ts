import { MigrationInterface, QueryRunner, Table } from "typeorm";

export enum TipoRecurso {
  MAQUINARIA = "MAQUINARIA",
  INSUMO = "INSUMO",
}
export class RecursoTable1610002000090 implements MigrationInterface {
  private readonly tableName = "project.catmaerecurso";

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
            name: "tipo_recurso",
            type: "enum",
            enum: [TipoRecurso.INSUMO, TipoRecurso.MAQUINARIA],
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
