import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export enum TipoJustificacion {
  DAYS = "DAYS",
  HOURS = "HOURS",
  MINUTES = "MINUTES",
}

export class JustificacionTable1610001016000 implements MigrationInterface {
  private readonly tableName = "talent.catmaejustificacion";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["razon_id"],
      referencedTableName: "talent.catmaerazon",
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
            name: "tipo_maximo_id",
            type: "enum",
            enum: [
              TipoJustificacion.DAYS,
              TipoJustificacion.HOURS,
              TipoJustificacion.MINUTES,
            ],
            isNullable: true,
          },
          {
            name: "maximo_cantidad_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "razon_id",
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

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
