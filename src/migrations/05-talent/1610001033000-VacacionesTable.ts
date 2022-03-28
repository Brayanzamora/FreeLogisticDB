import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class VacacionesTable1610001033000 implements MigrationInterface {
  private readonly tableName = "talent.catmaevacaciones";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["trabajador_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["periodo_vacaciones_id"],
      referencedTableName: "talent.catmaeperiodovacaciones",
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
            name: "comentario",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "diasvacaciones",
            type: "int4",
            default: 0,
            isNullable: true,
          },
          {
            name: "diaspendiente",
            type: "int4",
            default: 0,
            isNullable: true,
          },
          {
            name: "diasexpirado",
            type: "int4",
            default: 0,
            isNullable: true,
          },
          {
            name: "trabajador_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "periodo_vacaciones_id",
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
