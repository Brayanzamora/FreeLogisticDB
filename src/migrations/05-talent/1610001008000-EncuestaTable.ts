import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class EncuestaTable1610001008000 implements MigrationInterface {
  private readonly tableName = "talent.catmaeencuesta";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["periodoencuesta_id"],
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
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fechacreacion",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
          {
            name: "inicio",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fin",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fecha_inicio_trabajador",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "fecha_fin_trabajador",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "estado",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "periodoencuesta_id",
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

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_NOMBRE_ENCUESTA",
        columnNames: ["nombre"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
