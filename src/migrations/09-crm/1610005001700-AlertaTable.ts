import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class AlertaTable1610005001700 implements MigrationInterface {
  private readonly tableName = "crm.catmaealerta";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["actividad_id"],
      referencedTableName: "crm.catmaeactividad",
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
            isNullable: true,
          },
          {
            name: "hora_inicio",
            type: "time",
            isNullable: false,
          },
          {
            name: "actividad_id",
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
        name: "UQ_ACTIVIDAD_ALERTA",
        columnNames: ["actividad_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
