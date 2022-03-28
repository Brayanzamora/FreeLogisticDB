import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CampanhaTable1610005000100 implements MigrationInterface {
  private readonly tableName = "crm.catmaecampanha";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["moneda_id"],
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
            name: "objetivo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "estado",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "descripcion",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "fecha_ini",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "fecha_fin",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "edad", //rango_edad
            type: "varchar",
            isNullable: true,
          },
          {
            name: "monto",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "moneda_id",
            type: "int4",
            isNullable: true,
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
