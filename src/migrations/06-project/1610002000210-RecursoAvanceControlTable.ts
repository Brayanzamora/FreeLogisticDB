import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class RecursoAvanceControlTable1610002000210
  implements MigrationInterface
{
  private readonly tableName = "project.catmaerecursoavancecontrol";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["avancecontrol_id"],
      referencedTableName: "project.catmaeavancecontrol",
      referencedColumnNames: ["id"],
      onDelete: "CASCADE",
    }),
    new TableForeignKey({
      columnNames: ["recurso_actividad_insumo_maquinaria_id"],
      referencedTableName: "project.catmaerecursoactividadinsumomaquinaria",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["recurso_actividad_hombre_id"],
      referencedTableName: "project.catmaerecursoactividadhombre",
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
            name: "pvplannedcost",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "pvplanned",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "pvreal",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "orden",
            type: "int4",
            isNullable: false,
          },
          {
            name: "recurso_actividad_insumo_maquinaria_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "recurso_actividad_hombre_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "avancecontrol_id",
            type: "int4",
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
