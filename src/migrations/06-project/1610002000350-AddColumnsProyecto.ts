import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from "typeorm";

export class AddColumnsProyecto1610002000350 implements MigrationInterface {
    private readonly tableName = "project.catmaeproyecto";
    
    private readonly foreignKeys = [
      new TableForeignKey({
        columnNames: ["prioridad_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      }),
      new TableForeignKey({
        columnNames: ["estado_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      }),
      new TableForeignKey({
        columnNames: ["fase_id"],
        referencedTableName: "commons.catdetcompendio",
        referencedColumnNames: ["id"],
      }),
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns(this.tableName, [
        new TableColumn({
          name: "prioridad_id",
          type: "int4",
          isNullable: true,
        }),
        new TableColumn({
          name: "estado_id",
          type: "int4",
          isNullable: true,
        }),
        new TableColumn({
          name: "fase_id",
          type: "int4",
          isNullable: true,
        }),
        new TableColumn({
          name: "periodos_adicional",
          type: "int4",
          isNullable: false,
        }),
      ]);
      await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn(this.tableName, "prioridad_id");
      await queryRunner.dropColumn(this.tableName, "estado_id");
      await queryRunner.dropColumn(this.tableName, "fase_id");
      await queryRunner.dropColumn(this.tableName, "periodos_adicional");
    }
}