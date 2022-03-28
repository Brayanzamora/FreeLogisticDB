import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class ConversacionTable1610005002000 implements MigrationInterface {
  private readonly tableName = "crm.catmaeconversacion";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["actividad_id"],
      referencedTableName: "crm.catmaeactividad",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["trabajador_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["parent_id"],
      referencedTableName: "crm.catmaeconversacion",
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
            name: "actividad_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "trabajador_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "mensaje",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "fecha",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "es_respuesta",
            type: "boolean",
            default: false,
            isNullable: false,
          },
          {
            name: "parent_id",
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
