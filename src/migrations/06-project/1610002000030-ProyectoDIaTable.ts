import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export enum DiaSemana {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

export class ProyectoDiaTable1610002000030 implements MigrationInterface {
  private readonly tableName = "project.catmaeproyectodia";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["proyecto_id"],
      referencedTableName: "project.catmaeproyecto",
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
            name: "proyecto_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "diasemana",
            type: "enum",
            enum: [
              DiaSemana.MONDAY,
              DiaSemana.TUESDAY,
              DiaSemana.WEDNESDAY,
              DiaSemana.THURSDAY,
              DiaSemana.FRIDAY,
              DiaSemana.SATURDAY,
              DiaSemana.SUNDAY,
            ],

            isNullable: false,
          },
          {
            name: "estado",
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
        name: "UQ_PROYECTODIA",
        columnNames: ["diasemana", "proyecto_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
