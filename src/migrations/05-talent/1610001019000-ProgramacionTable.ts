import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class ProgramacionTable1610001019000 implements MigrationInterface {
  private readonly tableName = "talent.catmaeprogramacion";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["trabajador_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["validacion_id"],
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
            name: "fecha",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "inicio",
            type: "time",
            isNullable: false,
          },
          {
            name: "fin",
            type: "time",
            isNullable: false,
          },
          {
            name: "horariorotativo",
            type: "boolean",
            default: false,
            isNullable: false,
          },
          {
            name: "trabajador_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "validacion_id",
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
        name: "UQ_PROGRAMACIION",
        columnNames: ["fecha", "trabajador_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
