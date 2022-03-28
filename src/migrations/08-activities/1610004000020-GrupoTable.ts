import { MigrationInterface, QueryRunner, Table } from "typeorm";

export enum PrivacidadGrupo {
  PUBLICO = "PUBLICO",
  PRIVADO = "PRIVADO",
}

export class GrupoTable1610004000020 implements MigrationInterface {
  private readonly tableName = "activities.catmaegrupo";

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
            name: "icono",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nombre",
            type: "varchar",
            default: true,
            isNullable: false,
          },
          {
            name: "descripcion",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "privacidad",
            type: "enum",
            enum: [PrivacidadGrupo.PRIVADO, PrivacidadGrupo.PUBLICO],
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
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
