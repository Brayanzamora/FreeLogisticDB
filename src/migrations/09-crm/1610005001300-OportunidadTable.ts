import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum EtapaEmbudo {
  PROSPECCION = "PROSPECCION",
  CALIFICACION = "CALIFICACION",
  ANALISIS = "ANALISIS",
  TOMADEDECISION = "TOMA DE DECISION",
  LLAMADOACOTIZAR = "LLAMADO A COTIZAR",
}

export enum TipoOportunidad {
  BIEN = "BIEN",
  SERVICIO = "SERVICIO",
}

export class OportunidadTable1610005001300 implements MigrationInterface {
  private readonly tableName = "crm.catmaeoportunidad";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["tipo_moneda_id"],
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
            name: "titulo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipo_oportunidad",
            type: "enum",
            enum: [TipoOportunidad.BIEN, TipoOportunidad.SERVICIO],
            isNullable: false,
          },
          {
            name: "etapa_embudo",
            type: "enum",
            enum: [
              EtapaEmbudo.PROSPECCION,
              EtapaEmbudo.CALIFICACION,
              EtapaEmbudo.ANALISIS,
              EtapaEmbudo.TOMADEDECISION,
              EtapaEmbudo.LLAMADOACOTIZAR,
            ],
            isNullable: false,
          },
          {
            name: "tipo_moneda_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "monto",
            type: "decimal",
            precision: 9,
            scale: 3,
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

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
